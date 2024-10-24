// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap' }
      ]
    }
  },

  css: [
    '@/assets/icons/style.css',
    '@/assets/styles/_variables.scss',
    '@/assets/styles/main.scss',
  ],

  modules: ['@nuxt/image'],

  hooks: {
    'pages:extend'(pages) {
      pages.push({
        name: 'country-code',
        path: '/country/code/:code',
        file: '~/pages/country/[name].vue'
      })
    }
  }
})
