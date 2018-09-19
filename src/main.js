// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store'
import FastClick from 'fastclick'
import './assets/icon/search/font_837511_ra67169wm6n/iconfont.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 消除点击延迟
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function(){
    FastClick.attach(document.body);
  }, false);
}
Vue.use(VueSwiper)
Vue.use(Vuetify)
Vue.config.productionTip = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
