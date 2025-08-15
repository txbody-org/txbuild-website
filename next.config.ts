import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
	/* config options here */
	output: "export",
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	// For organization repo, only in production:
	...(isProd && {
		basePath: "/txbuild-website",
		assetPrefix: "/txbuild-website/",
	}),
};

export default nextConfig;
