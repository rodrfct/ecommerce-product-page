// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
    strict: true
  },
  srcDir: './src',
  app: {
    baseURL: '/ecommerce-product-page',
    head: {
      title: 'Frontend Mentor | E-commerce product page'
    }
  },
  css: ['~/assets/main.css']
})
