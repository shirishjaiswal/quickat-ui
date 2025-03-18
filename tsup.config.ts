import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: 'src/index.ts', 
    'badge': 'src/Badge/badge.tsx',
    'click-button': 'src/Button/click-button.tsx',
    'field-input': 'src/Input/field-input.tsx',
    'duration': 'src/Input/duration.tsx',
    'select-box': 'src/CheckBox/select-box.tsx',
    'multi-select-box': 'src/CheckBox/multi-select-box.tsx',
    'checkbox-types': 'src/CheckBox/types.ts', 
    'modal-box': 'src/DialogueBox/modal-box.tsx',
    'types': 'src/type.ts',  
  },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  outDir: "dist",
  splitting: false,
  minify: true,
  clean: true,
  esbuildOptions(options) {
    options.loader = { ".css": "file" };
  },
});