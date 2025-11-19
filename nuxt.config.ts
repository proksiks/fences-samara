// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ['./app/assets/css/tailwind.css', './app/assets/css/global.css', './app/assets/css/fonts.css', 'vue-final-modal/style.css'],
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxtjs/sitemap',
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }],
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  icon: {
    size: '',
    customCollections: [
      {
        prefix: 'name',
        dir: './app/assets/icons',
      },
    ],
  },
});
