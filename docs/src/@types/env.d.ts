declare namespace NodeJS {
  interface ProcessEnv {
    BLAND_API_KEY: string;
    NODE_ENV: 'development' | 'production';
  }
} 