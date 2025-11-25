import {defineConfig} from "rolldown";

export default defineConfig({
    input: "OverlayScrollbars.js",
    output: {
        file: "wwwroot/OverlayScrollbars.js",
        format: "iife",
        sourcemap: true,
        minify: true,
    },
    treeshake: true,
    platform: "browser",
})