// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  typescript: {
    typeCheck: true,
    strict: true
  },
  srcDir: './src',
  app: {
    baseURL: '/ecommerce-product-page',
    head: {
      title: 'Frontend Mentor | E-commerce product page',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/ecommerce-product-page/favicon.ico'}
      ]
    }
  },
  css: ['~/assets/main.css']
})
