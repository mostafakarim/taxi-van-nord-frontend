// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  css: ["@/assets/css/styles.css"],
  devtools: { enabled: true },
  plugins: [
    { src: '~/plugins/vue3-google-maps.js', ssr: false },
    { src: '~/plugins/moment.js',  ssr: false }
  ],
  devServerHandlers: [],
  modules: [
    '@nuxtjs/tailwindcss',
    /* ['nuxt-stripe-module', {
      publishableKey: 'pk_test_51OqWDzBXF90gZaxFbAy7L1gp0HeAtWo2qMKL4pf2WnmzGW600LxENnc3QbohXm7hLbwuGXV6DhXptqeVdyOZFW9p00N26pDnum',
    }] */
  ]
})
