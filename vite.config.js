import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { qrcode } from 'vite-plugin-qrcode';
import removeConsole from 'vite-plugin-remove-console';
import { viteStaticCopy } from 'vite-plugin-static-copy';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // removeConsole(),
    qrcode(),
    viteStaticCopy({
      targets: [
        {
          src: '_redirects',
          dest: '',
        },
        {
          src: '652edcd01ff0dfaf8e10a4d25bdc11fb.txt',
          dest: '',
        },
      ],
    }),
  ],
});
