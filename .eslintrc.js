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
      "plugin:storybook/recommended"
   ],
   "overrides": [
      {
         "env": {
            "node": true
         },
         "files": [
            ".eslintrc.{js,cjs}",
            "**/src/**/*.{test,stories}.{ts,tsx}"
         ],
         "parserOptions": {
            "sourceType": "script"
         },
         "rules": {
            "i18next/no-literal-string": "off",
            "max-len": "off",
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
      "react-hooks",
   ],
   "rules": {
      "react/jsx-indent": [2, 3],
      "react/jsx-indent-props": [2, 3],
      "indent": ["error", 3],
      "@stylistic/js/indent": ["error", 3],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "react/jsx-filename-extension": [
         2,
         { extensions: [".js", ".jsx", ".tsx"] }
      ],
      "import/no-unresolved": "off",
      "import/prefer-default-export": "off",
      "no-unused-vars": "off",
      "react/require-default-props": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "warn",
      "react/function-component-definition": "off",
      "no-shadow": "off",
      "import/extensions": "off",
      "import/no-extraneous-dependencies": "off",
      "no-underscore-dangle": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "i18next/no-literal-string": [
         "error",
         {
            markupOnly: true,
            ignoreAttribute: ["data-testid", "to"],
         },
      ],
      "max-len": ["error", { ignoreComments: true, code: 120 }],
      "@typescript-eslint/ban-ts-comment": "off",
      "react/display-name": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error"
   },
   "globals": {
      "__IS_DEV__": true,
      "__API__": true,
      "__PROJECT__": true,
   }
};
