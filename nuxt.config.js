const nodeExternals = require('webpack-node-externals')
const resolve = (dir) => require('path').join(__dirname, dir)

module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'vuetify-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  css: [
    'normalize.css/normalize.css',
    '~/assets/style/app.styl'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    babel: {
      // plugins: [
      //   ["transform-imports", {
      //     "vuetify": {
      //       "transform": "vuetify/es5/components/${member}",
      //       "preventFullImport": true
      //     }
      //   }]
      // ]
    },
    vendor: [
      'moment'
      // '~/plugins/vuetify.js'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      // if (ctx.isServer) {
      //   config.externals = [
      //     nodeExternals({
      //       whitelist: [/^vuetify/]
      //     })
      //   ]
      // }
    }
  },

  plugins: [
    { src: '~plugins/vue-lazyload', ssr: false },
    // { src: '~plugins/web-font-loader', ssr: false },
    { src: '~plugins/mixins' },
    // { src: '~plugins/vuetify.js' },
  ],
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/google-analytics', {
      id: 'UA-XXXX-XXX'
    }],
    ['~/modules/api', {
      'config': './options/wp.json',
      'baseURI': 'https://greenz.jp/wp-json',
    }],
  ]
}
