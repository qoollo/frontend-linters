module.exports = {
  plugins: ["@angular-eslint"],
  extends: ["plugin:@angular-eslint/template/process-inline-templates"],
  overrides: [
    {
      files: ["*.component.html"],
      parser: "@angular-eslint/template-parser",
      plugins: ["@angular-eslint/template"],
      rules: {
        "@angular-eslint/template/interactive-supports-focus": [
          "error",
        ],
        "@angular-eslint/template/role-has-required-aria": [
          "error",
        ],
        "@angular-eslint/template/attributes-order": [
          "error",
        ],
        "@angular-eslint/template/no-inline-styles": [
          "error",
          {
            "allowNgStyle": true,
            "allowBindToStyle": true,
          },
        ],
        "@angular-eslint/template/prefer-self-closing-tags": [
          "error",
        ],
        "@angular-eslint/template/prefer-ngsrc": [
          "error",
        ],
      },
    },
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {
        "@angular-eslint/sort-lifecycle-methods": [
          "error",
        ],
      },
    },
  ],
}