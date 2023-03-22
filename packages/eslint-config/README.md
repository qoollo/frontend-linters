# :whale: @Qoollo/eslint-config :whale:

Предоставляет базовую конфигурацию ESLint для форматирования JS и TS файлов, используемую в компании Qoollo.
Как правило, используется в связке с `@qoollo/eslint-config-angular`

## :dart: Использование

1) Установить из NPM

```bash
npm i --save-dev @qoollo/eslint-config
```

2) Создать в корне проекта файл `.eslintrc` с указанным содержимым
```json
{
  "extends": ["@qoollo/eslint-config"]
}
```

### :bulb: Ручной запуск

Для запуска можно использовать следующие команды

```json
{
  "lint:ts": "npx eslint src",
  "lint:js": "npx eslint **/*.js",
  "lint:ts:fix": "npx eslint --fix src",
  "lint:js:fix": "npx eslint **/*.js --fix"
}
```

## :exclamation: Обратите внимание
Данный пакет уже включает в себя `eslint` и набор плагинов для него,
так что эти зависимости следует убрать из `package.json` проекта,
в который подключается данный пакет. 

## :electric_plug: Используемые дополнения

`@qoollo/eslint-config` включает:

- `eslint-plugin-import` - поддержка импортов ES6
- `eslint-plugin-jsdoc` - правила линтинга для JSDOC
- `eslint-plugin-node` - дополнительные правила для NodeJS
- `eslint-plugin-prefer-arrow` - правила для стрелочных функций
- `eslint-plugin-promise` - правила для работы с Promise
- `eslint-plugin-sort-imports-es6-autofix` - автоматическая сортировка импортов
- `eslint-plugin-unicorn` - дополнительные правила линтинга
