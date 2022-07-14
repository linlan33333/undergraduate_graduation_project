
import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css'
import {Notify} from "quasar";

// To be used on app.use(Quasar, { ... }), 就是原本在main.js中写的Vue.use(Quasar, {
//   plugins: {
//     Notify
//   },
//   config: {
//     notify: { /* look at QUASARCONFOPTIONS from the API card (bottom of page) */ }
//   }
// })中那一部分
//注意插件引入在这里引，比如Notify，而不是在main.js中引
export default {
  config: {
    notify: { }
  },
  plugins: {
    Notify
  }
}