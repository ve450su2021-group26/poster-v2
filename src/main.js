import Vue from 'vue'
import App from './App.vue'
import routes from "./routers"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'
import { BootstrapVue,IconsPlugin} from 'bootstrap-vue'
import 'bootstrap'
import axios from "axios";
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router: routes,
  components: {
    App
  },
  template: '<App/>',
  render: h => h(App),
}).$mount('#app')

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)