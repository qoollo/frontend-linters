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
      },
    },
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {},
    },
  ],
}