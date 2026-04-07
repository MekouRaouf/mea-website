import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import prerender from 'vite-plugin-prerender';

export default defineConfig({
  plugins: [
    react(),
    prerender({
      // List all your public routes
      routes: ['/', '/about', '/services', '/team', '/contact', '/news', '/blogs', '/payasyougo'],
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html.replace(
          /<title>[^<]*<\/title>/,
          `<title>MEA Srlz | Making Energy Available</title>`
        );
        return renderedRoute;
      }
    })
  ]
});