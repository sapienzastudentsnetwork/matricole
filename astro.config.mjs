
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sapienzastudents.net',
  base: '/matricole',
  build: {
    assetsPrefix: '/matricole',
  },
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});