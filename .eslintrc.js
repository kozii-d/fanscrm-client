module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
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
    },
    {
      "env": {
        "node": true
      },
      "files": [
        ".webpack.config.ts",
        "./config/**/*.{js,ts}",
      ],
      "rules": {
        "@typescript-eslint/no-var-requires": "off",
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
    "react-hooks",
    "eslint-plugin-import-helpers"
  ],
  "rules": {
    quotes: [2, "double", {
      avoidEscape: true,
    }],
    indent: [2, 2],
    semi: ["error", "always"],
    "object-curly-spacing": [1, "always"],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-filename-extension": [2, {
      extensions: [".js", ".jsx", ".tsx"],
    }],
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-unused-vars": ["warn", {
      argsIgnorePattern: "^_",
    }],
    "@typescript-eslint/no-explicit-any": "warn",
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        alphabetize: {
          order: "asc",
          ignoreCase: false,
        },
        groups: [
          ["/^react$/", "/^react-dom$/"],
          "module",
          "/^shared\\//",
          "/^entities\\//",
          "/^features\\//",
          "/^widgets\\//",
          "/^pages\\//",
          "/^processes\\//",
          "/^app\\//",
          "parent",
          "sibling",
          "index",
        ],
      },
    ],
  },
  // envs / glob vars
  globals: {
    __IS_DEV__: true,
    __API__: true,
  },
};
