import config from './public/config/configuration.json';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/styles.css"],
  devtools: { enabled: true },
  plugins: [
    { src: '~/plugins/moment.js',  ssr: false }
  ],
  devServerHandlers: [],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon'
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  runtimeConfig: {
    public: {
      ...config
    }
  }
})
