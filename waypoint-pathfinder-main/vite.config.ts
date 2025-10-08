import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split Spline components into separate chunks
          'spline': ['@splinetool/react-spline', '@splinetool/runtime'],
          // Split Framer Motion into separate chunk
          'framer-motion': ['framer-motion'],
          // Split UI components
          'ui': ['@radix-ui/react-accordion', '@radix-ui/react-alert-dialog', '@radix-ui/react-avatar'],
          // Split other large dependencies
          'vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: mode === 'development',
  },
  optimizeDeps: {
    include: ['@splinetool/react-spline', '@splinetool/runtime', 'framer-motion'],
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
}));
