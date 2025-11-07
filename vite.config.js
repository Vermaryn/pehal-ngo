// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   base: "/pehal-ngo/",
//   build: {
//     outDir: "dist",
//     assetsDir: "assets",
//   },
//   publicDir: "public",
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 🧠 This config works for both GitHub & Netlify
const isGithub = process.env.VITE_GITHUB === "true";

export default defineConfig({
  plugins: [react()],
  base: isGithub ? "/pehal-ngo/" : "/", // ✅ "/" = Netlify fix, not "./"
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  publicDir: "public",
});
