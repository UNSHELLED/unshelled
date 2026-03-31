/**
 * Z.AI API Client - VENOM Masterpiece Edition
 * Production-ready with retry logic, caching, and enhanced parsing
 */

import type {
  ZAIConfig,
  ZAIChatRequest,
  ZAIChatResponse,
  WebSearchResult,
  ImageGenerationRequest,
  ImageGenerationResponse,
  VideoGenerationRequest,
  VideoGenerationResponse
} from './types.js';

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

interface ZAIError {
  code: string;
  message: string;
  type: string;
}

export class ZAIClient {
  private readonly apiKey: string;
  private readonly baseURL: string;
  private cache = new Map<string, CacheEntry<unknown>>();
  private rateLimitReset = 0;
  private requestCount = 0;

  constructor(config: ZAIConfig) {
    this.apiKey = config.apiKey;
    this.baseURL = config.baseURL || 'https://api.z.ai/api/coding/paas/v4';
  }

  /**
   * Enhanced request with retry logic and exponential backoff
   */
  private async request<T>(
    endpoint: string,
    body: unknown,
    method: 'POST' | 'GET' = 'POST',
    retries = 3
  ): Promise<T> {
    // Check rate limit
    if (Date.now() < this.rateLimitReset) {
      const waitTime = this.rateLimitReset - Date.now();
      console.error(`Rate limited, waiting ${waitTime}ms`);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }

    const url = `${this.baseURL}${endpoint}`;
    let lastError: Error | null = null;

    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.apiKey}`,
            'Accept-Language': 'en-US,en'
          },
          body: method === 'POST' ? JSON.stringify(body) : undefined
        });

        // Handle rate limiting
        if (response.status === 429) {
          const resetAfter = parseInt(response.headers.get('X-RateLimit-Reset') || '60', 10) * 1000;
          this.rateLimitReset = Date.now() + resetAfter;

          if (attempt < retries) {
            console.error(`Rate limited, retry ${attempt + 1}/${retries} after ${resetAfter}ms`);
            await new Promise(resolve => setTimeout(resolve, resetAfter));
            continue;
          }
        }

        if (!response.ok) {
          const errorText = await response.text();
          const error = this.parseError(errorText);

          // Don't retry client errors (4xx) except 429
          if (response.status >= 400 && response.status < 500 && response.status !== 429) {
            throw new Error(`Z.AI API error (${error.code || response.status}): ${error.message || errorText}`);
          }

          lastError = new Error(`Z.AI API error: ${response.status} ${errorText}`);

          if (attempt < retries) {
            const backoffTime = Math.min(1000 * Math.pow(2, attempt), 10000);
            console.error(`Request failed, retry ${attempt + 1}/${retries} after ${backoffTime}ms`);
            await new Promise(resolve => setTimeout(resolve, backoffTime));
            continue;
          }
        }

        this.requestCount++;
        return response.json() as Promise<T>;

      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error));

        if (attempt < retries) {
          const backoffTime = Math.min(1000 * Math.pow(2, attempt), 10000);
          console.error(`Request error, retry ${attempt + 1}/${retries}: ${lastError.message}`);
          await new Promise(resolve => setTimeout(resolve, backoffTime));
        }
      }
    }

    throw lastError || new Error('Request failed after retries');
  }

  /**
   * Parse Z.AI error response
   */
  private parseError(errorText: string): ZAIError {
    try {
      const parsed = JSON.parse(errorText);
      if (parsed.error) {
        return {
          code: parsed.error.code || 'UNKNOWN',
          message: parsed.error.message || parsed.error,
          type: parsed.error.type || 'api_error'
        };
      }
    } catch {
      // Fall through to default
    }
    return {
      code: 'UNKNOWN',
      message: errorText,
      type: 'unknown_error'
    };
  }

  /**
   * Get/set cache with TTL
   */
  private cacheGet<T>(key: string): T | null {
    const entry = this.cache.get(key) as CacheEntry<T> | undefined;
    if (!entry) return null;

    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  private cacheSet<T>(key: string, data: T, ttl: number): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
  }

  /**
   * Chat completion with optional web search
   */
  async chat(request: ZAIChatRequest): Promise<ZAIChatResponse> {
    const cacheKey = `chat:${JSON.stringify(request)}`;
    const cached = this.cacheGet<ZAIChatResponse>(cacheKey);
    if (cached) return cached;

    const response = await this.request<ZAIChatResponse>('/chat/completions', request);
    this.cacheSet(cacheKey, response, 300000); // 5 minute cache
    return response;
  }

  /**
   * Enhanced web search with better parsing
   */
  async webSearch(query: string, topK: number = 10): Promise<WebSearchResult[]> {
    const cacheKey = `search:${query}:${topK}`;
    const cached = this.cacheGet<WebSearchResult[]>(cacheKey);
    if (cached) return cached;

    // Use a more structured prompt for better extraction
    const response = await this.chat({
      model: 'glm-4.6',
      messages: [
        {
          role: 'system',
          content: `You are a search results assistant. When given a search query, you MUST return results in this exact JSON format:

[
  {
    "title": "Page title",
    "url": "https://example.com",
    "snippet": "Brief description of the page content"
  }
]

Return ONLY the JSON array. No explanations, no markdown code blocks.`
        },
        {
          role: 'user',
          content: `Search for: "${query}"\n\nReturn the top ${topK} results as a JSON array.`
        }
      ],
      tools: [
        {
          type: 'web_search',
          web_search: {
            enable: true,
            search_result: true
          }
        }
      ],
      temperature: 0.1 // Lower temperature for more structured output
    });

    const content = response.choices[0]?.message?.content || '';
    const results = this.parseSearchResults(content, query, topK);

    // Cache for 10 minutes
    this.cacheSet(cacheKey, results, 600000);
    return results;
  }

  /**
   * Enhanced search result parsing with multiple strategies
   */
  private parseSearchResults(content: string, query: string, topK: number): WebSearchResult[] {
    const results: WebSearchResult[] = [];

    // Strategy 1: Try to parse as JSON array
    try {
      // Extract JSON from markdown code blocks if present
      const jsonMatch = content.match(/```(?:json)?\s*(\[[\s\S]*?\])\s*```/) ||
                       content.match(/(\[[\s\S]*?\])/);

      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[1]);
        if (Array.isArray(parsed)) {
          for (const item of parsed.slice(0, topK)) {
            if (item.title && (item.url || item.link)) {
              results.push({
                title: this.cleanText(item.title),
                link: item.url || item.link,
                content: this.cleanText(item.snippet || item.description || item.content || '')
              });
            }
          }
        }
      }
    } catch {
      // JSON parsing failed, try other strategies
    }

    // Strategy 2: Look for structured patterns (numbered lists, etc)
    if (results.length === 0) {
      const numberedPattern = /^\d+\.\s+\[([^\]]+)\]\((https?:\/\/[^\)]+)\)\s*\n\s*(.+)$/gm;
      let match;

      while ((match = numberedPattern.exec(content)) !== null && results.length < topK) {
        results.push({
          title: this.cleanText(match[1]),
          link: match[2],
          content: this.cleanText(match[3])
        });
      }
    }

    // Strategy 3: Extract URLs with surrounding context
    if (results.length === 0) {
      const urlPattern = /https?:\/\/[^\s\)]+/g;
      const urls = [...content.matchAll(urlPattern)];

      for (const [, url] of urls.slice(0, topK)) {
        const urlIndex = content.indexOf(url);
        const beforeText = content.substring(Math.max(0, urlIndex - 300), urlIndex);
        const afterText = content.substring(urlIndex + url.length, Math.min(content.length, urlIndex + url.length + 300));

        // Try to find title in text before URL
        const titleMatch = beforeText.match(/[•\-\*]?\s*(.+?)(?:\n|$)/);
        // Get description from text after URL
        const descriptionMatch = afterText.match(/(.{50,300}?)(?:\n|$|https?:)/);

        results.push({
          title: this.cleanText(titleMatch?.[1] || 'Search Result'),
          link: url,
          content: this.cleanText(descriptionMatch?.[1] || afterText.substring(0, 200))
        });
      }
    }

    // Deduplicate by URL
    const seen = new Set<string>();
    const uniqueResults: WebSearchResult[] = [];

    for (const result of results) {
      const normalizedUrl = result.link.toLowerCase().replace(/^https?:\/\//, '').replace(/\/$/, '');

      if (!seen.has(normalizedUrl)) {
        seen.add(normalizedUrl);
        uniqueResults.push(result);
      }
    }

    return uniqueResults.length > 0
      ? uniqueResults.slice(0, topK)
      : [{
          title: 'Search Results',
          link: `https://www.google.com/search?q=${encodeURIComponent(query)}`,
          content: this.cleanText(content.substring(0, 500))
        }];
  }

  /**
   * Clean text by removing markdown and extra whitespace
   */
  private cleanText(text: string): string {
    return text
      .replace(/\*\*/g, '')
      .replace(/\*/g, '')
      .replace(/\[|\]/g, '')
      .replace(/\n+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * Generate images using CogView-4
   */
  async generateImage(request: ImageGenerationRequest): Promise<ImageGenerationResponse> {
    const imageURL = 'https://open.bigmodel.cn/api/paas/v4/images/generations';

    const response = await fetch(imageURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        model: 'cogview-4',
        prompt: request.prompt,
        size: request.size || '1024x1024'
      })
    });

    if (!response.ok) {
      const error = await response.text();
      const parsedError = this.parseError(error);
      throw new Error(`Image generation failed (${parsedError.code}): ${parsedError.message}`);
    }

    return response.json() as Promise<ImageGenerationResponse>;
  }

  /**
   * Generate video using CogVideoX-3
   */
  async generateVideo(request: VideoGenerationRequest): Promise<VideoGenerationResponse> {
    const videoURL = 'https://open.bigmodel.cn/api/paas/v4/videos/generations';

    const response = await fetch(videoURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        model: 'cogvideox-3',
        prompt: request.prompt,
        duration: request.duration || 5
      })
    });

    if (!response.ok) {
      const error = await response.text();
      const parsedError = this.parseError(error);
      throw new Error(`Video generation failed (${parsedError.code}): ${parsedError.message}`);
    }

    return response.json() as Promise<VideoGenerationResponse>;
  }

  /**
   * Check API key validity
   */
  async validate(): Promise<boolean> {
    try {
      await this.chat({
        model: 'glm-4.6',
        messages: [{ role: 'user', content: 'test' }],
        max_tokens: 1
      });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Get cache statistics
   */
  getCacheStats(): { size: number; requests: number } {
    return {
      size: this.cache.size,
      requests: this.requestCount
    };
  }

  /**
   * Clear cache
   */
  clearCache(): void {
    this.cache.clear();
  }
}
