import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
   site: 'https://26-27.sapienzastudents.net',
   base: '/',
   output: 'static',
   vite: {
     plugins: [tailwindcss()],
   },
});

