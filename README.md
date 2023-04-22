# Dashboard

## Project setup

```
npm install
```

## Project structure

Structure:

- src:
  - assets:
    - fonts (all fonts);
  - images (default images);
  - scss (connecting fonts, setting variables, functions and mixins);
- components:
  - [AddAccount](https://github.com/HuzyagulovER/Dashboard/tree/master/src/components/AddAccount/) (Templates for /add-account page):
    - [AddAccountForm.vue](https://github.com/HuzyagulovER/Dashboard/tree/master/src/components/AddAccount/AddAccountForm.vue) (Full new account form);
  - [Elements](https://github.com/HuzyagulovER/Dashboard/tree/master/src/components/Elements/) (All base templates)
  - [Icons](https://github.com/HuzyagulovER/Dashboard/tree/master/src/components/Icons/) (All icons in Vue templates)
  - [Menu](https://github.com/HuzyagulovER/Dashboard/tree/master/src/components/Menu/) (Templates for /menu page):
    - [Elements](https://github.com/HuzyagulovER/Dashboard/tree/master/src/components/Menu/Elements/):
      - [MenuNav.vue](https://github.com/HuzyagulovER/Dashboard/tree/master/src/components/Menu/Elements/MenuNav.vue) (Navigation section for /menu page);
    - [Views](https://github.com/HuzyagulovER/Dashboard/tree/master/src/components/Menu/Views/) (Pages for /menu page. You can correlate pages with templates by file names);
  - [Settings](https://github.com/HuzyagulovER/Dashboard/tree/master/src/components/Settings/) (Templates for /settings page):
    - [Elements](https://github.com/HuzyagulovER/Dashboard/tree/master/src/components/Settings/Elements/):
      - [SettingsAlert.vue](https://github.com/HuzyagulovER/Dashboard/tree/master/src/components/Settings/Elements/SettingsAlert.vue) (Alert block for /settings page);
      - [SettingsGraph.vue](https://github.com/HuzyagulovER/Dashboard/tree/master/src/components/Settings/Elements/SettingsGraph.vue) (Graph block for /settings page);
      - [SettingsNav.vue](https://github.com/HuzyagulovER/Dashboard/tree/master/src/components/Settings/Elements/SettingsNav.vue) (Navigation section for /settings page);
      - [SettingsTitle.vue](https://github.com/HuzyagulovER/Dashboard/tree/master/src/components/Settings/Elements/SettingsTitle.vue) (Title block for /settings page);
      - [SettingsTopline.vue](https://github.com/HuzyagulovER/Dashboard/tree/master/src/components/Settings/Elements/SettingsTopline.vue) (Topline section for /settings page);
    - [Views](https://github.com/HuzyagulovER/Dashboard/tree/master/src/components/Settings/Views/) (Pages for /settings page. You can correlate pages with templates by file names)
  - [Terminal](https://github.com/HuzyagulovER/Dashboard/tree/master/src/components/Terminal/) (Templates for /terminal page):
    - [Elements](https://github.com/HuzyagulovER/Dashboard/tree/master/src/components/Terminal/Elements/):
      - [TerminalChangePanel.vue](https://github.com/HuzyagulovER/Dashboard/tree/master/src/components/Terminal/Elements/TerminalChangePanel.vue) (Action panel for /terminal);
      - [TerminalNavPanel.vue](https://github.com/HuzyagulovER/Dashboard/tree/master/src/components/Terminal/Elements/TerminalNavPanel.vue) (Navigation section for /terminal page);
      - [TerminalSettingsPanel.vue](https://github.com/HuzyagulovER/Dashboard/tree/master/src/components/Terminal/Elements/TerminalSettingsPanel.vue) (Settings panel for /terminal);
    - [Views](https://github.com/HuzyagulovER/Dashboard/tree/master/src/components/Terminal/Views/) (Pages for /terminal page. You can correlate pages with templates by file names)
- router:
  - [index.ts](https://github.com/HuzyagulovER/Dashboard/tree/master/src/router/index.ts) (Routes for base routing);
- views:
  - [TheAddAccount.vue](https://github.com/HuzyagulovER/Dashboard/tree/master/src/views/TheAddAccount.vue) (Base template for /add-account);
  - [TheAuthorization.vue](https://github.com/HuzyagulovER/Dashboard/tree/master/src/views/TheAuthorization.vue) (Base template for /authorization);
  - [TheMenu.vue](https://github.com/HuzyagulovER/Dashboard/tree/master/src/views/TheMenu.vue) (Base template for /menu);
  - [TheRecovery.vue](https://github.com/HuzyagulovER/Dashboard/tree/master/src/views/TheRecovery.vue) (Base template for /recovery);
  - [TheRegistration.vue](https://github.com/HuzyagulovER/Dashboard/tree/master/src/views/TheRegistration.vue) (Base template for /registration);
  - [TheSettings.vue](https://github.com/HuzyagulovER/Dashboard/tree/master/src/views/TheSettings.vue) (Base template for /settings);
  - [TheTerminal.vue](https://github.com/HuzyagulovER/Dashboard/tree/master/src/views/TheTerminal.vue) (Base template for /terminal);

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
