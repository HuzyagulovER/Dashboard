const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
	transpileDependencies: true,
	css: {
		loaderOptions: {
			sass: {
				// additionalData: `@import "@/assets/scss/index.scss";`,
			},
		},
	},
	productionSourceMap: false,
	// publicPath: "/examples/_dashboard/",
});
