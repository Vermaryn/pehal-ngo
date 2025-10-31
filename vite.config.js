import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 🟢 Base URL must match your GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: "/pehal-ngo/", 
  build: {
    outDir: "dist",
  },

  server: {
    port: 5173,
    open: true,
  },
});
