import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  // The app's tsconfig sets jsx: "preserve" for Next's compiler; esbuild needs
  // to be told to actually transform JSX when Vitest builds the test bundle.
  esbuild: { jsx: "automatic" },
  resolve: {
    alias: { "@": path.resolve(import.meta.dirname, ".") },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    include: ["**/*.test.{ts,tsx}"],
    exclude: ["node_modules/**", ".next/**"],
  },
});
