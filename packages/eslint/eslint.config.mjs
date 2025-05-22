import js from '@eslint/js';
import next from 'eslint-plugin-next';
import { flatConfigs } from 'next/eslint';

export default [
  js.configs.recommended, // 기본 JavaScript 권장 규칙
  ...flatConfigs(), // Next.js용 Flat config 불러오기 (필수)
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    plugins: {
      next,
    },
    rules: {
      // 너가 커스터마이징 하고 싶으면 여기에 추가
      'no-console': 'warn',
      'no-unused-vars': 'warn',
    },
  },
];
