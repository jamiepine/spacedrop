import { defineConfig } from 'vite';
import { builtinModules } from 'module';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    outDir: '../build/electron',
    minify: process.env.MODE === 'development' ? false : 'terser',
    terserOptions: {
      ecma: 2020,
      compress: {
        passes: 2
      },
      safari10: false
    },
    lib: {
      entry: 'index.ts',
      formats: ['cjs']
    },
    rollupOptions: {
      external: ['electron', ...builtinModules]
    },
    emptyOutDir: true
  }
});
