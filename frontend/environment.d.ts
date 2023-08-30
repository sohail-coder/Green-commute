export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_MOCK_API_URL: string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}
