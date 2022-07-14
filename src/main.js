import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

// 这语法连用3个use函数简直了
createApp(App).use(Quasar, quasarUserOptions).use(store).use(router).mount('#app')
