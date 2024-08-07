import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
      "@home": path.resolve(__dirname, "src/modules/home"),
      "@shared": path.resolve(__dirname, "src/modules/shared"),
      "@pokedex": path.resolve(__dirname, "src/modules/pokedex"),
      "@play": path.resolve(__dirname, "src/modules/play"),
      "@news": path.resolve(__dirname, "src/modules/news"),
      "@tv": path.resolve(__dirname, "src/modules/tv"),
    },
  },
});
