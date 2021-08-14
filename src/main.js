import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import vuetify from './plugins/vuetify'
import { init } from 'emailjs-com';
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1100,
})

var VueScrollTo = require('vue-scrollto');
 
Vue.use(VueScrollTo)

init("user_Fsoks2Lk8E1hy0Q1roxAd");

Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
