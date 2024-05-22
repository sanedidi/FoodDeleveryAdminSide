import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      modules: "/src/modules",
      store: "/src/store",
      assets: "/src/assets",
      utils: "/src/utils",
      api: "/src/services/api",
      services: "/src/services",
      hooks: "/src/hooks",
      public: "/public"
    },
  }
});
