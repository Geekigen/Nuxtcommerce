// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-auth-sanctum', '@pinia/nuxt'],
  sanctum: {
    baseUrl: 'http://localhost:8000', // Laravel API
    endpoints: {
      csrf: '/sanctum/csrf-cookie',
      login: '/login',
      logout: '/api/logout',
      user: '/api/user',
  },
},
})