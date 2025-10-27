import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// ✅ Build config for UI library (importable by Next.js apps)
export default defineConfig({
    plugins: [react(), svgr()],
    build: {
        lib: {
            // entry point for your components
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "GreenKartUI",
            formats: ["es", "cjs"],
            fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
            // ❗ don't bundle these
            external: ["react", "react-dom", /^next\//, /^@next\//],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM"
                }
            }
        },
        sourcemap: true, // helps in debugging imports
        emptyOutDir: true
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "next/link": path.resolve(__dirname, 'src/shims/nextLink.tsx'),
            '@/lib/api': path.resolve(__dirname, 'src/mocks/api.ts'),
        }
    },
    css: {
        modules: {
            // ✅ Keep your CSS Modules as-is
            localsConvention: "camelCase",
            scopeBehaviour: "local"
        },
        preprocessorOptions: {
            scss: {}
        }
    }
});
