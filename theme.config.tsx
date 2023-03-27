import React from "react";
import Logo from "./components/Logo";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
	logo: <Logo />,
	project: {
		link: "https://github.com/Chensokheng",
	},
	chat: {
		link: "https://discord.gg/XbJkCtt",
	},
	docsRepositoryBase: "https://github.com/Chensokheng",
	footer: {
		text: (
			<>
				<h1>&#169;{" 2023 Daily Components by Chensokheng."}</h1>
			</>
		),
	},
	banner: {
		key: "beta-release",
		text: "🎉 Daily Components beta is released",
	},
	editLink: {
		text: null,
	},
	feedback: {
		content: null,
	},
	head: (
		<>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta property="og:title" content="Daily Componets" />
			<meta
				property="og:description"
				content="an open source React/Next.js Tailwind UI components and templates to bootstrap your new apps, projects or landing sites"
			/>
		</>
	),
	useNextSeoProps() {
		return {
			titleTemplate: "%s – Daily",
		};
	},
};

export default config;
