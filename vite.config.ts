import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const webhookUrl =
    env.VITE_WEBHOOK_URL ||
    env.WEBHOOK_URL ||
    env.VITE_WEBHOOK ||
    env.WEBHOOK ||
    'https://hook.us1.make.com/78qse8suki4uxx27wtobelmudg9drwd4';

  return {
    plugins: [react(), tailwindcss()],
    envPrefix: ['VITE_', 'WEBHOOK'],
    define: {
      'import.meta.env.VITE_WEBHOOK_URL': JSON.stringify(webhookUrl),
      'import.meta.env.WEBHOOK_URL': JSON.stringify(webhookUrl),
      'process.env.WEBHOOK_URL': JSON.stringify(webhookUrl),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
