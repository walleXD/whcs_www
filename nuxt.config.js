module.exports = {
  head: {
    titleTemplate: '%s - WHCS Radio',
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.materialdesignicons.com/1.9.32/css/materialdesignicons.min.css'
      }
    ]
  },
  css: ['vuetify/dist/vuetify.min.css'],
  plugins: [
    '~plugins/vuetify',
    {src: '~assets/styles/main.styl', lang: 'stylus'}
  ],
  build: {
    vendors: ['vuetify']
  }
}
