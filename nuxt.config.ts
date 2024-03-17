import { nodePolyfills } from 'vite-plugin-node-polyfills';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@pinia/nuxt', '@vueuse/nuxt', 'nuxt-lodash'],
  vite: {
    plugins: [
      nodePolyfills({
        include: ['querystring'],
        // Whether to polyfill `node:` protocol imports.
        protocolImports: true,
      }),
    ],
  },
});
