import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";
import tsconfigPaths from "vite-tsconfig-paths";
import * as path from "path";

export default defineConfig({
	plugins: [react(), eslintPlugin(), tsconfigPaths()],
	resolve: {
		alias: {
			"@scss": path.resolve(__dirname, "./src/assets/scss"),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
                    @import '@scss/01-settings/_breakpoints.scss';
                    @import '@scss/01-settings/_colors.scss';
                    @import '@scss/01-settings/_fonts.scss';
                    @import '@scss/02-tools/_functions.scss';
                `,
			},
		},
	},
});
