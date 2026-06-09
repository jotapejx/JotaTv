import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

/**
 * Vite configuration for GitHub Pages deployment
 * 
 * Key differences from Manus version:
 * - Removed Manus-specific plugins (vitePluginManusRuntime, vitePluginManusDebugCollector)
 * - Removed jsxLocPlugin (development-only)
 * - Configured for static output to 'dist' folder
 * - Removed server config (not needed for static builds)
 * - Added base path for GitHub Pages (set via environment variable)
 */

const base = process.env.VITE_BASE_PATH || "/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    // Optimize for GitHub Pages static hosting
    minify: "terser",
    sourcemap: false,
    rollupOptions: {
      output: {
        // Ensure consistent chunk names for caching
        manualChunks: {
          vendor: ["react", "react-dom", "wouter"],
        },
      },
    },
  },
});
