export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'survey',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
    ]

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/font/stylesheet.css',
    '@/assets/global_style/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@/plugins/element-ui.js', mode: 'client'},
    {src: '@/plugins/v-mask.js', mode: 'client'},
    {src: '@/plugins/custom-function.js', mode: 'client'},
  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'ru',
            file: 'ru-RU.js'
          },
          {
            code: 'uz',
            file: 'uz-UZ.js'
          },
        ],
        strategy: 'prefix',
        defaultLocale: 'uz',
        lazy: true,
        langDir: 'lang/',
      }
    ],
    "@nuxtjs/axios"
  ],
  axios: {
    baseURL: "http://192.168.10.185:8001/api/v1/"
   // baseURL: "http://192.168.10.204:8001/api/v1/"
   // baseURL: 'http://192.168.10.13:8088/api/v1/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    cssSourceMap: false,
  }
}
