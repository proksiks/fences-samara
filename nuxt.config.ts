// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ['./app/assets/css/tailwind.css', './app/assets/css/global.css', './app/assets/css/fonts.css'],
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/fonts', '@nuxt/eslint'],
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
