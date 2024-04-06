// vite.config.mjs
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { VitePluginGhPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  // Configuration options here
  plugins: [
    reactRefresh(),
    VitePWA(),
    VitePluginGhPages({
      domain: 'https://Sarvesh804.github.io/Herevolution4',
    }),
  ],
});
