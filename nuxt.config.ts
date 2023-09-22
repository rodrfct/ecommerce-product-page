// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
    strict: true
  },
  app: {
    baseURL: '/ecommerce-product-page'
  },
  css: ['~/assets/main.css']
})
