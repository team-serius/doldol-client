// eslint-disable-next-line @typescript-eslint/no-var-requires
const importedConfig = require('../../packages/config/tailwind.config');
// const importedConfig = require('config/tailwind.config');
/** @type {import('tailwindcss').Config} */
module.exports = {
  ...importedConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    '../../packages/libs/src/utils/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/components/**/*.{js,ts,jsx,tsx}',
    '../../packages/icons/src/icons/**/*.{js,ts,jsx,tsx}',
    '../../packages/config/tailwind.config',
  ],
};
