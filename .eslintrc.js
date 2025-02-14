module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:prettier/recommended', 'plugin:angular/johnpapa'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {},
};
