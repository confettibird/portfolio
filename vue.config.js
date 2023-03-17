module.exports = {
	runtimeCompiler: true,
	css: {
		loaderOptions: {
			// pass options to sass-loader
			sass: {
				// @/ is an alias to src/
				// so this assumes you have a file named `src/variables.scss`
				data: `@import "@/scss/shared/variables.scss",
                       "@/scss/shared/mixins.scss";`,
			},
		},
	},
	chainWebpack: (config) => {
		config.module
			.rule("eslint")
			.use("eslint-loader")
			.options({
				fix: true,
			});
	},
};
