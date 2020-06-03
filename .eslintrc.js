module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
	],
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
	rules: {
		"@typescript-eslint/explicit-module-boundary-types": [2]
	},
};
