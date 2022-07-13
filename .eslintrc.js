module.exports = {
    env: {
        es2022: true,
        node: true
    },
    extends: ['eslint:recommended', 'prettier'],
    ignorePatterns: ['dist'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'never']
    }
}
