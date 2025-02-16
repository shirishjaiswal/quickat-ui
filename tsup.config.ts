import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  minify: true,
  dts: true,
  outDir: "dist",
  sourcemap: true,
  clean: true,
  esbuildOptions(options) {
    options.loader = { ".css": "file" };
  }
});