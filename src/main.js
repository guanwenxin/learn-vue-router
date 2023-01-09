import Vue from 'vue'
import App from './App.vue'
import vueRouter from './router'
import ElementUI from 'element-ui';
import '@/assets/theme-css/index.css';
import i18n from './i18n';
import { vuexStore } from '@/vuex/index'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  // 引入vuex
  store: vuexStore,
  i18n,
  router: vueRouter,
  render: h => h(App)
}).$mount('#app')
