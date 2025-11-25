import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  server: {
    cors: false,
    proxy: {
      '/android-devices': {
        target: 'https://192.168.150.92:8001/api/v1/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
