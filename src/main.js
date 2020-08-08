import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style.sass'
import './assets/create.sass'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import { mdbInput } from 'mdbvue'
// export default axios.create({
//   baseURL: 'http://localhost:3000',
//   headers: {
//     'Content-type': 'application/json'
//   }
// })
const host = 'http://localhost:3000/'
Vue.prototype.$makeImgUrl = function (image) {
  return host + image
}
Vue.prototype.$http = axios.create({
  baseURL: host
})
Vue.prototype.$remoteUrl = host
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(mdbInput)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
