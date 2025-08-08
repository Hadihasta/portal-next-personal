import next from 'next'
import nextPlugin from '@next/eslint-plugin-next'
import js from '@eslint/js'

export default [
  js.configs.recommended,
  nextPlugin.configs.recommended,
  {
    rules: {
      '@next/next/no-img-element': 'off',
    },
  },
]
