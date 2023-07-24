import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'vue-toast-notification/dist/theme-bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'
import ToastPlugin from 'vue-toast-notification';


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(ToastPlugin);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
