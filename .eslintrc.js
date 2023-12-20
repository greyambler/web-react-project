module.exports = {
   "env": {
      "browser": true,
      "es2021": true,
      "jest": true
   },
   "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:i18next/recommended",
   ],
   "overrides": [
      {
         "env": {
            "node": true
         },
         "files": [
            ".eslintrc.{js,cjs}"
         ],
         "parserOptions": {
            "sourceType": "script"
         }
      }
   ],
   "parser": "@typescript-eslint/parser",
   "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
   },
   "plugins": [
      "@typescript-eslint",
      "react",
      "@stylistic/js",
      "i18next",
   ],
   "rules": {
      "indent": ["error", 3],
      "@stylistic/js/indent": ["error", 3],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "react/jsx-filename-extension": [
         2,
         { extensions: [".js", ".jsx", ".tsx"] }
      ],
      "react/jsx-indent": [2, 3],
      "react/jsx-indent-props": [2, 3],
      "import/no-unresolved": "off",
      "import/prefer-default-export": "off",
      "no-unused-vars": "warn",
      "react/require-default-props": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "warn",
      "react/function-component-definition": "off",
      "no-shadow": "off",
      "import/extensions": "off",
      "import/no-extraneous-dependencies": "off",
      "no-underscore-dangle": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "i18next/no-literal-string": ["error", { markupOnly: true }],
      "max-len": ["error", { ignoreComments: true }]
   },
   "globals": {
      "__IS_DEV__": true,
   },
};
