module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
    ],
    rules: {
        'eqeqeq': ['error', 'always'],
        'no-undef': 'warn',
        'no-console': 'warn',
        'no-unused-vars': 'warn',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-empty-interface': 'warn'
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
