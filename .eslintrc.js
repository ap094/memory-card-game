module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"prettier",
	],
	rules: {
		eqeqeq: ["error", "always"],
		"no-undef": "warn",
		"no-console": "warn",
		"react/react-in-jsx-scope": "off",
		"@typescript-eslint/no-empty-interface": "warn",
		"@typescript-eslint/no-unused-vars": "warn",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
