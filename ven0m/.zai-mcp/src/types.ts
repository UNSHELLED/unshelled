/**
 * Z.AI MCP Server - Type Definitions
 * VENOM Production
 */

export interface ZAIConfig {
  apiKey: string;
  baseURL?: string;
}

export interface ZAIMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ZAIChatRequest {
  model: string;
  messages: ZAIMessage[];
  stream?: boolean;
  temperature?: number;
  max_tokens?: number;
  tools?: ZAITool[];
  tool_choice?: 'auto' | 'required';
}

export interface ZAITool {
  type: 'web_search' | 'cogview';
  web_search?: {
    enable?: boolean;
    search_result?: boolean;
  };
  cogview?: {
    prompt: string;
    size?: string;
  };
}

export interface ZAIChatResponse {
  id: string;
  created: number;
  model: string;
  choices: ZAIChoice[];
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export interface ZAIChoice {
  index: number;
  message: ZAIMessage;
  finish_reason: string;
}

export interface WebSearchResult {
  title: string;
  link: string;
  content: string;
  media?: string;
  snippet?: string;
}

export interface ImageGenerationRequest {
  prompt: string;
  size?: '1024x1024' | '768x1344' | '864x1152' | '1440x720' | '1344x768' | '720x1440' | '1152x864';
}

export interface ImageGenerationResponse {
  created: number;
  data: Array<{
    url: string;
    b64_json?: string;
  }>;
}

export interface VideoGenerationRequest {
  prompt: string;
  duration?: number;
}

export interface VideoGenerationResponse {
  id: string;
  object: string;
  status: string;
  result_url?: string;
}
