import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
        contact: './contact.html',
        practices: './practices.html',
        immigration: './immigration.html',
        'real-estate': './real-estate.html',
        team: './team.html',
        blog: './blog.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
