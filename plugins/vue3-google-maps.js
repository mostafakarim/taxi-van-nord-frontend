import { GoogleMap } from 'vue3-google-map';

export default defineNuxtPlugin((nuxtApp) => { 
  nuxtApp.vueApp.use(GoogleMap, 
    {
      key: process.env.GOOGLE_MAPS_API_KEY,
      libraries: ['places'], // Spécifiez les bibliothèques supplémentaires si nécessaire
    }
  )
})