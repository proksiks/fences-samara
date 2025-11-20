// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
    compressPublicAssets: {
      brotli: true,
      gzip: true,
    },
    minify: true,
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'ru' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
    },
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },
  css: ['./app/assets/css/tailwind.css', './app/assets/css/global.css', './app/assets/css/fonts.css', 'vue-final-modal/style.css'],
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    // '@nuxt/fonts',
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
