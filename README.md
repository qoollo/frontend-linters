# :whale: Qoollo linters configurations :whale:

Монорепозиторий для конфигураций линтеров, используемых в компании Qoollo

### Конфигурации

| **Package**                                                                              | **Version**                                                                    | **README**                                                                                      | **Downloads**                                                                                                               |
|------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------| ----------------------------------------------------------------------------------------------- |-----------------------------------------------------------------------------------------------------------------------------|
| [@qoollo/eslint-config](https://npmjs.com/package/@qoollo/eslint-config)                 | ![](https://img.shields.io/npm/v/%40qoollo%2Feslint-config/latest.svg)         | [![](https://img.shields.io/badge/README--green.svg)](packages/eslint-config/README.md)         | [![](https://img.shields.io/npm/dw/@qoollo/eslint-config)](https://npmjs.com/package/@qoollo/eslint-config)                 |
| [@qoollo/eslint-config-angular](https://npmjs.com/package/@qoollo/eslint-config-angular) | ![](https://img.shields.io/npm/v/%40qoollo%2Feslint-config-angular/latest.svg) | [![](https://img.shields.io/badge/README--green.svg)](packages/eslint-config-angular/README.md) | [![](https://img.shields.io/npm/dw/@qoollo/eslint-config-angular)](https://npmjs.com/package/@qoollo/eslint-config-angular) |
| [@qoollo/stylelint-config](https://npmjs.com/package/@qoollo/stylelint-config)           | ![](https://img.shields.io/npm/v/%40qoollo%2Fstylelint-config/latest.svg)      | [![](https://img.shields.io/badge/README--green.svg)](packages/stylelint-config/README.md)      | [![](https://img.shields.io/npm/dw/@qoollo/stylelint-config)](https://npmjs.com/package/@qoollo/stylelint-config)           |

### Гайд что проверить при миграции в продакш репозиторий

- [ ] Поменять поле name в каждом package.json на @qoollo
- [ ] Скинуть версии всех пакетов до 1.0.0
- [ ] Заменить все вхождения qoollo :sunglasses: на qoollo
- [ ] Проверить все ридмишки и убрать из них запись о переименовании
