module.exports = {
	root: true,
	env: {
		node: true,
		"vue/setup-compiler-macros": true,
	},
	extends: [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		// "@vue/typescript/recommended",
	],
	parserOptions: {
		ecmaVersion: 2020,
		parser: "@typescript-eslint/parser",
		sourceType: "module",
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
	},
};
