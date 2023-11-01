module.exports = {
  plugins: ["@angular-eslint"],
  extends: ["plugin:@angular-eslint/template/process-inline-templates"],
  overrides: [
    {
      files: ["*.component.html"],
      extends: ["plugin:@angular-eslint/template/base"],
      rules: {
        "@angular-eslint/template/accessibility-interactive-supports-focus": [
          "error"
        ],
        "@angular-eslint/template/accessibility-role-has-required-aria": [
          "error"
        ],
        "@angular-eslint/template/attributes-order": [
          "error",
        ],
        "@angular-eslint/template/no-inline-styles": [
          "error",
          {
            "allowNgStyle": true,
            "allowBindToStyle": true
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