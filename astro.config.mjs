import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

// import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
	site: "https://gocodeart.vercel.app",
	integrations: [tailwind(), sitemap(), react()],
	// adapter: vercel(),
	build: {
		inlineStylesheets: "always",
	},
	output: "static",
	vite: {
		build: {
			cssMinify: "lightningcss",
		},
		ssr: {
			noExternal: ["path-to-regexp"],
		},
	},
})
