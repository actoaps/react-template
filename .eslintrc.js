module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2021,
        sourceType: 'module'
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'standard'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'react/jsx-indent': [
            2,
            4
        ],
        'react/jsx-indent-props': [
            2,
            4
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    },
    plugins: [
        'cypress',
        'react-hooks',
        'react'
    ],
    env: {
        browser: true,
        es2021: true,
        node: true,
        'cypress/globals': true
    }
}
