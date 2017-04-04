module.exports = {
  head: {
    titleTemplate: '%s - WHCS Radio',
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  css: ['vuetify/dist/vuetify.min.css'],
  plugins: ['~plugins/vuetify'],
  build: {
    vendors: ['vuetify']
  }
}
