import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos'
import VueSplide from '@splidejs/vue-splide';
import Vuelidate from 'vuelidate'

import './bootstrap.min.css'
import 'aos/dist/aos.css'
import 'boxicons/css/boxicons.min.css'
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

Vue.config.productionTip = false

Vue.use( VueSplide );
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  created(){
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
