// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// export default defineConfig({
//     base : "/lenis/",
//   plugins: [
//     tailwindcss(),
//   ],
// })


import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/lenis/',

  plugins: [
    tailwindcss(),
  ],

  build: {
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) return 'three';
            if (id.includes('@react-three')) return 'r3f';
            if (id.includes('react') || id.includes('react-dom')) return 'react'; // ✅ Fix here
            return 'vendor';
          }
        },
      },
    },
  },
});
