// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  redirects: {
    '/color-lumie': '/',
    '/color-lumie/privacy': '/privacy',
    '/color-lumie/terms': '/terms',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
