import Vue from 'vue'
import App from './App.vue'
import vueRouter from './router'
import ElementUI from 'element-ui';
import '@/assets/theme-css/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router: vueRouter,
  render: h => h(App)
}).$mount('#app')