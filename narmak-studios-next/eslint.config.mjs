import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [...compat.extends('next/core-web-vitals')];

export default eslintConfig; 