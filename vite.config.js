import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "next/image": path.resolve(__dirname, "src/shims/nextImage.tsx"),
            "next/link": path.resolve(__dirname, "src/shims/nextLink.tsx"),
            "@/lib/api": path.resolve(__dirname, "src/mocks/api.ts"),
        },
    },
    build: {
        cssCodeSplit: false,
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "GreenKartUI",
            formats: ["es", "cjs"],
            fileName: (format) => `index.${format === "es" ? "mjs" : "cjs"}`,
        },
        rollupOptions: {
            external: ["react", "react-dom"], // 👈 no "next/" here anymore
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
        emptyOutDir: true,
        sourcemap: true,
    },
});
