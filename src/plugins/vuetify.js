import '@mdi/font/css/materialdesignicons.css'
import LRU from 'lru-cache'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const themeCache = new LRU({
  max: 10,
  maxAge: 1000 * 60 * 60 // 1 hour
})

export default new Vuetify({
  theme: {
    dark: true,
    options: {
      cspNonce: 'dQw4w9WgXcQ',
      minifyTheme: function (css) {
        return process.env.NODE_ENV === 'production'
          ? css.replace(/[\r\n|\r|\n]/g, '')
          : css
      },
      themeCache,
      customProperties: true
    },
    themes: {
      dark: {
        primary: '#0084ff',
        secondary: '#282E34',
        textcolor: '#ddd'
      }
    }
  },
  icons: {
    iconfont: 'mdi'
  }
})
