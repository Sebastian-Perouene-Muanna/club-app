// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/club-app/', // Asegúrate de que esta línea esté presente
  plugins: [react()],
});
