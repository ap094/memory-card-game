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
	plugins: ["react", "@typescript-eslint", "import"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"prettier",
	],
	rules: {
		eqeqeq: ["error", "always"],
		"no-undef": "warn",
		"no-console": "warn",
		"react/react-in-jsx-scope": "off",
		"@typescript-eslint/no-empty-interface": "warn",
		"@typescript-eslint/no-unused-vars": "warn",
		"@typescript-eslint/no-empty-function": "warn",
        "sort-imports": [
            "warn",
            {
                "ignoreCase": true,
                "ignoreDeclarationSort": true,
            },
        ],
		"import/order": [
			"warn",
			{
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                    "index",
                ],
				pathGroups: [
					{
                        pattern: "react",
                        group: "builtin",
                        position: "before",
					},
				],
				pathGroupsExcludedImportTypes: ["react"],
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
			},
		],
        "import/no-unresolved": "error",
	},
	settings: {
		react: {
			version: "detect",
		},
        "import/resolver": {
            node: {
                paths: ["src"],
                extensions: [".ts", ".tsx"],
            },
		},
	},
};
