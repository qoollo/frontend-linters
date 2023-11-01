module.exports = {
  plugins: ["@angular-eslint"],
  extends: ["plugin:@angular-eslint/template/process-inline-templates"],
  overrides: [
    {
      files: ["*.component.html"],
      extends: ["plugin:@angular-eslint/template/base"],
      rules: {
        "new-cap": [
          "error",
          {
            capIsNew: false,
            capIsNewExceptions: [
              "Pipe",
              "NgModule",
              "NgComponent",
              "Injectable",
              "Inject",
              "Directive",
              "NgDirective",
              "Component",
              "Optional",
              "HostBinding",
              "Input",
              "Output",
              "HostListener",
              "ViewChild",
              "ViewChildren",
            ],
          },
        ],
        "spaced-comment": "off",
        "@angular-eslint/template/accessibility-alt-text": "error",
        "@angular-eslint/template/accessibility-label-has-associated-control":
          "error",
        "@angular-eslint/template/banana-in-box": "error",
        "@angular-eslint/template/click-events-have-key-events": "error",
        "@angular-eslint/template/conditional-complexity": [
          "error",
          {
            maxComplexity: 4,
          },
        ],
        "@angular-eslint/template/cyclomatic-complexity": [
          "error",
          {
            maxComplexity: 11,
          },
        ],
        "@angular-eslint/template/eqeqeq": "error",
        "@angular-eslint/template/mouse-events-have-key-events": "error",
        "@angular-eslint/template/no-any": "error",
        "@angular-eslint/template/no-call-expression": "off",
        "@angular-eslint/template/no-distracting-elements": "error",
        "@angular-eslint/template/no-duplicate-attributes": "error",
        "@angular-eslint/template/no-negated-async": "error",
        "@angular-eslint/template/use-track-by-function": "error",
        "@angular-eslint/template/no-interpolation-in-attributes": "error",
      },
    },
    {
      files: ["*.component.ts"],
      extends: ["plugin:@angular-eslint/template/process-inline-templates"],
    },
    {
      files: ["*.spec.ts"],
      rules: {
        "@typescript-eslint/no-unsafe-call": "off",
      },
    },
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {
        "@angular-eslint/component-class-suffix": "error",
        "@angular-eslint/contextual-decorator": "error",
        "@angular-eslint/contextual-lifecycle": "error",
        "@angular-eslint/directive-class-suffix": "error",
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            style: "camelCase",
          },
        ],
        "@angular-eslint/no-attribute-decorator": "error",
        "@angular-eslint/no-conflicting-lifecycle": "error",
        "@angular-eslint/no-host-metadata-property": "error",
        "@angular-eslint/no-input-prefix": "error",
        "@angular-eslint/no-input-rename": "error",
        "@angular-eslint/no-inputs-metadata-property": "error",
        "@angular-eslint/no-lifecycle-call": "error",
        "@angular-eslint/no-output-native": "error",
        "@angular-eslint/no-output-rename": "error",
        "@angular-eslint/no-outputs-metadata-property": "error",
        "@angular-eslint/no-pipe-impure": "error",
        "@angular-eslint/no-queries-metadata-property": "error",
        "@angular-eslint/prefer-on-push-component-change-detection": "error",
        "@angular-eslint/prefer-output-readonly": "error",
        "@angular-eslint/relative-url-prefix": "error",
        "@angular-eslint/use-component-view-encapsulation": "error",
        "@angular-eslint/use-injectable-provided-in": [
          "error",
          {
            ignoreClassNamePattern: "/^([a-zA-Z]+State(Rebuilder)?)$/",
          },
        ],
        "@angular-eslint/use-lifecycle-interface": "error",
        "@angular-eslint/use-pipe-transform-interface": "error",
      },
    },
  ],
};
