import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import globalAPI from './assets/js/globalAPI.js'
Vue.prototype.globalAPI = globalAPI
Vue.prototype.$axios = Axios

Vue.config.productionTip = false

import Router from 'vue-router'

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
return routerPush.call(this, location).catch(error=> error)
}
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


