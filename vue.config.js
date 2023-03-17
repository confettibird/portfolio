const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  runtimeCompiler: true,
	transpileDependencies: true,
	css: {
		loaderOptions: {
			// pass options to sass-loader
			sass: {
				// @/ is an alias to src/
				// so this assumes you have a file named `src/variables.scss`
				additionalData: `@import "@/scss/shared/variables.scss",
                       "@/scss/shared/mixins.scss";`,
			},
		},
	},
});
