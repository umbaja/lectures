import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// One-off config used only to produce a single self-contained HTML file
// for publishing as a Claude Artifact. Not part of the normal build.
export default defineConfig({
  plugins: [viteSingleFile()],
  build: {
    outDir: "dist-artifact",
    emptyOutDir: true,
  },
});
