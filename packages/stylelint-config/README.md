# :whale: @Qoollo/stylelint-config :whale:

Базовая конфигурация Stylelint компании Qoollo

## :dart: Использование

1. Установить из NPM

```bash
npm i --save-dev @qoollo/stylelint-config
```
 s
2. Создать в корне проекта файл `.stylelintrc.json` с указанным содержимым

```json
{
  "extends": ["@qoollo/stylelint-config"]
}
```

### :bulb: Ручной запуск

Для запуска можно использовать следующие команды

```json
{
  "lint:style": "npx stylelint \"./src/**/*{.css,.scss}\"",
  "lint:style:fix": "npx stylelint \"./src/**/*{.css,.scss}\" --fix"
}
```
