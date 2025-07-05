import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [injectHTML()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        products: resolve(__dirname, "nested/products.html"),
        services: resolve(__dirname, "nested/services.html"),
        article: resolve(__dirname, "nested/article.html"),
        about: resolve(__dirname, "nested/about.html"),
        product_details: resolve(__dirname, "nested/product-details.html"),
      },
    },
  },
});



