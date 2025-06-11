import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      server: {
        host: '0.0.0.0',
        port: Number(process.env.PORT || 4173),
        hmr: false,
      },
      preview: {
        host: '0.0.0.0',
        port: Number(process.env.PORT || 4173),
        strictPort: true,
        allowedHosts: [
          'text-game-knnh.onrender.com'
        ]
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
}); 