import dotenv from 'dotenv';

dotenv.config();

/**
 * Configuration object holding OpenAI and Claude specific settings.
 */
export const config = {
  openai: {
    apiKey: process.env.OPENAI_API_KEY || '',
    apiEndpoint: process.env.OPENAI_API_ENDPOINT || 'https://api.openai.com',
    defaultModel: 'gpt-3.5-turbo',
  },
  claude: {
    apiKey: process.env.ANTHROPIC_API_KEY || '',
    apiEndpoint: process.env.ANTHROPIC_API_ENDPOINT || 'https://api.anthropic.com',
    defaultModel: 'claude-3-haiku-20240307',
  },
};
