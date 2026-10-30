/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEBHOOK_URL?: string;
  readonly WEBHOOK_URL?: string;
  readonly VITE_WEBHOOK?: string;
  readonly WEBHOOK?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

