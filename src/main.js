import Vue from 'vue'
import App from './App.vue'
import routes from "./routers"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'
import { BootstrapVue,IconsPlugin} from 'bootstrap-vue'
import 'bootstrap'

Vue.config.productionTip = false

new Vue({
  el: "#app",
  router: routes,
  render: h => h(App),
}).$mount('#app')

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
