/**
 * Z.AI MCP Server for Claude Code
 * VENOM Production - Complete Implementation
 *
 * Exposes Z.AI capabilities through MCP protocol:
 * - Web Search (works globally)
 * - Image Generation (CogView-4)
 * - Video Generation (CogVideoX-3)
 * - Chat with GLM models
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool
} from '@modelcontextprotocol/sdk/types.js';
import { ZAIClient } from './zai-client.js';

/**
 * Create Z.AI MCP Server
 */
async function createServer() {
  // Get API key from environment
  const apiKey = process.env.ZAI_API_KEY || process.env.ZAI_API_KEY;

  if (!apiKey) {
    console.error('Error: ZAI_API_KEY environment variable is required');
    console.error('Create a .env file with: ZAI_API_KEY=your_key_here');
    process.exit(1);
  }

  const client = new ZAIClient({
    apiKey,
    baseURL: process.env.ZAI_BASE_URL || 'https://api.z.ai/api/coding/paas/v4'
  });

  // Validate API key on startup
  console.error('Validating Z.AI API key...');
  const isValid = await client.validate();
  if (!isValid) {
    console.error('Error: Invalid Z.AI API key');
    process.exit(1);
  }
  console.error('Z.AI API key validated successfully');

  // Define available tools
  const tools: Tool[] = [
    {
      name: 'zai_search',
      description: 'Search the web using Z.AI web search. Works globally including Egypt. Returns relevant results with titles, links, and snippets.',
      inputSchema: {
        type: 'object',
        properties: {
          query: {
            type: 'string',
            description: 'The search query'
          },
          topK: {
            type: 'number',
            description: 'Number of results to return (default: 10)',
            default: 10
          }
        },
        required: ['query']
      }
    },
    {
      name: 'zai_chat',
      description: 'Chat with GLM-4.6 model. Useful for general reasoning, coding help, and analysis. Can use web search for current information.',
      inputSchema: {
        type: 'object',
        properties: {
          prompt: {
            type: 'string',
            description: 'The message to send to GLM-4.6'
          },
          model: {
            type: 'string',
            description: 'Model to use (default: glm-4.6)',
            enum: ['glm-4.6', 'glm-4.5', 'glm-5'],
            default: 'glm-4.6'
          },
          temperature: {
            type: 'number',
            description: 'Sampling temperature (0-1, default: 0.7)',
            default: 0.7
          },
          useWebSearch: {
            type: 'boolean',
            description: 'Enable web search for this query',
            default: false
          }
        },
        required: ['prompt']
      }
    },
    {
      name: 'zai_generate_image',
      description: 'Generate images using CogView-4. Creates high-quality images from text descriptions.',
      inputSchema: {
        type: 'object',
        properties: {
          prompt: {
            type: 'string',
            description: 'Detailed description of the image to generate'
          },
          size: {
            type: 'string',
            description: 'Image size',
            enum: ['1024x1024', '768x1344', '864x1152', '1440x720', '1344x768', '720x1440', '1152x864'],
            default: '1024x1024'
          }
        },
        required: ['prompt']
      }
    },
    {
      name: 'zai_generate_video',
      description: 'Generate videos using CogVideoX-3. Creates short video clips from text descriptions.',
      inputSchema: {
        type: 'object',
        properties: {
          prompt: {
            type: 'string',
            description: 'Detailed description of the video to generate'
          },
          duration: {
            type: 'number',
            description: 'Video duration in seconds',
            default: 5
          }
        },
        required: ['prompt']
      }
    }
  ];

  // Create MCP server
  const server = new Server(
    {
      name: '@venom/zai-mcp-server',
      version: '1.0.0'
    },
    {
      capabilities: {
        tools: {}
      }
    }
  );

  // List tools handler
  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools
  }));

  // Call tool handler
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    try {
      switch (name) {
        case 'zai_search': {
          const query = args?.query as string;
          const topK = (args?.topK as number) || 10;

          if (!query) {
            throw new Error('query is required for zai_search');
          }

          console.error(`Searching Z.AI for: ${query}`);
          const startTime = Date.now();
          const results = await client.webSearch(query, topK);
          const duration = Date.now() - startTime;
          const cacheStats = client.getCacheStats();

          // Format results beautifully
          let formatted = `🔍 Z.AI Search Results\n`;
          formatted += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
          formatted += `Query: "${query}"\n`;
          formatted += `Found: ${results.length} result${results.length !== 1 ? 's' : ''} in ${duration}ms\n`;
          formatted += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

          if (results.length > 0) {
            for (let i = 0; i < results.length; i++) {
              const result = results[i];
              formatted += `${i + 1}. **${result.title}**\n`;
              formatted += `   ${result.link}\n`;
              if (result.content && result.content.length > 0) {
                const snippet = result.content.length > 200
                  ? result.content.substring(0, 200) + '...'
                  : result.content;
                formatted += `   ${snippet}\n`;
              }
              formatted += `\n`;
            }
          } else {
            formatted += `No results found. Try a different query.\n\n`;
          }

          formatted += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
          formatted += `Cache: ${cacheStats.size} entries | Requests: ${cacheStats.requests}\n`;

          return {
            content: [
              {
                type: 'text',
                text: formatted
              }
            ]
          };
        }

        case 'zai_chat': {
          const prompt = args?.prompt as string;
          const model = (args?.model as string) || 'glm-4.6';
          const temperature = (args?.temperature as number) ?? 0.7;
          const useWebSearch = args?.useWebSearch as boolean;

          if (!prompt) {
            throw new Error('prompt is required for zai_chat');
          }

          console.error(`Chatting with ${model}: ${prompt.substring(0, 50)}...`);

          const chatRequest: any = {
            model,
            messages: [
              {
                role: 'system',
                content: 'You are a helpful AI assistant. Provide clear, accurate responses.'
              },
              { role: 'user', content: prompt }
            ],
            temperature,
            max_tokens: 4096
          };

          if (useWebSearch) {
            chatRequest.tools = [
              {
                type: 'web_search',
                web_search: {
                  enable: true,
                  search_result: true
                }
              }
            ];
          }

          const response = await client.chat(chatRequest);

          return {
            content: [
              {
                type: 'text',
                text: response.choices[0]?.message?.content || 'No response'
              }
            ]
          };
        }

        case 'zai_generate_image': {
          const prompt = args?.prompt as string;
          const size = ((args?.size as string) || '1024x1024') as '1024x1024' | '768x1344' | '864x1152' | '1440x720' | '1344x768' | '720x1440' | '1152x864';

          if (!prompt) {
            throw new Error('prompt is required for zai_generate_image');
          }

          console.error(`Generating image: ${prompt.substring(0, 50)}...`);

          const response = await client.generateImage({ prompt, size });

          return {
            content: [
              {
                type: 'text',
                text: JSON.stringify({
                  prompt,
                  images: response.data.map(img => ({
                    url: img.url,
                    hasBase64: !!img.b64_json
                  }))
                }, null, 2)
              }
            ]
          };
        }

        case 'zai_generate_video': {
          const prompt = args?.prompt as string;
          const duration = (args?.duration as number) || 5;

          if (!prompt) {
            throw new Error('prompt is required for zai_generate_video');
          }

          console.error(`Generating video: ${prompt.substring(0, 50)}...`);

          const response = await client.generateVideo({ prompt, duration });

          return {
            content: [
              {
                type: 'text',
                text: JSON.stringify({
                  prompt,
                  id: response.id,
                  status: response.status,
                  result_url: response.result_url || 'Processing...'
                }, null, 2)
              }
            ]
          };
        }

        default:
          throw new Error(`Unknown tool: ${name}`);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error(`Tool ${name} error: ${errorMessage}`);

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              error: errorMessage,
              tool: name
            }, null, 2)
          }
        ],
        isError: true
      };
    }
  });

  return server;
}

/**
 * Main entry point
 */
async function main() {
  console.error('Starting Z.AI MCP Server...');

  const server = await createServer();
  const transport = new StdioServerTransport();

  await server.connect(transport);

  console.error('Z.AI MCP Server running on stdio');
  console.error('Tools available: zai_search, zai_chat, zai_generate_image, zai_generate_video');
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
