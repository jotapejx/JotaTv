import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.viteEmbedUrl || import.meta.url);
const __dirname = path.dirname(__filename);

// Aqui está o caminho configurado com o nome exato do seu repositório
const base = "/JotaTv/";

export default defineConfig({
  base: base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  root: path.resolve(__dirname, "./"),
  build: {
    outDir: path.resolve(__dirname, "./dist"),
    emptyOutDir: true,
  },
});
