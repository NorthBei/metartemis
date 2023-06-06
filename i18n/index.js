/* eslint-disable @typescript-eslint/no-var-requires */
// use eslint-disable & commonJS because next-export-i18n ask to place i18n folder in top of porject layer
// ref: https://www.npmjs.com/package/next-export-i18n
// import en from './translations/en.json';
// import zh from './translations/zh.json';
const en = require('./translations/en.json');
const zh = require('./translations/zh.json');

const defaultLang = 'zh';

const i18n = {
  translations: {
    en,
    zh,
  },
  defaultLang,
  useBrowserDefault: true,
};

module.exports = i18n;
