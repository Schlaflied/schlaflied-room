import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://schlaflied-room.work',
  output: 'static',
  prefetch: true,
  experimental: { clientPrerender: true }
});
