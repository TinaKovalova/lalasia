import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import VitePluginWebpAndPath from "vite-plugin-webp-and-path";


const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    injectHTML(), VitePluginWebpAndPath()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        products: resolve(__dirname, "nested/products.html"),
        product_details: resolve(__dirname, "nested/product-details.html"),
        services: resolve(__dirname, "nested/services.html"),
        article: resolve(__dirname, "nested/article.html"),
        article_detail: resolve(__dirname, "nested/article-detail.html"),
        about: resolve(__dirname, "nested/about.html"),
      },
    },
  },
});



