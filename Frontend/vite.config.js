import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change frontend port to 3000 (or keep 3001 if preferred)
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Update to match your backend port
        changeOrigin: true,
      },
    },
  },
});
