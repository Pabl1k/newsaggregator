import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/newsaggregator/",
  server: {
    host: true,
    port: 8080,
    watch: {
      usePolling: true
    }
  }
});
