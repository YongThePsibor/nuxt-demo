import { defineConfig, presetAttributify, presetMini, transformerDirectives } from 'unocss';

export default defineConfig({
  // ...UnoCSS 选项
  presets: [
    presetAttributify({
      prefix: '',
      prefixedOnly: true,
      strict: true,
      nonValuedAttribute: false,
    }),
    presetMini({
      prefix: 'un-',
    }),
  ],
  transformers: [transformerDirectives()],
});
