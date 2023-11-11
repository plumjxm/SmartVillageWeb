// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import VueRouter from 'vue-router';	
import router from './router'
Vue.use(VueRouter)

import App from '@/App'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import "swiper/css/swiper.min.css"
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
Vue.component('Swiper', Swiper);
Vue.component('SwiperSlide', SwiperSlide);
// Swiper 代表最外侧容器
// SwiperSlide 代表每一张轮播图

import global from '@/tools/global'
Vue.prototype.Global = global

// Vue.forceUpdate()

// 控制标签宽高成比例的指令
import proportion from 'vue-proportion-directive';
Vue.use(proportion);



import '@/assets/styles/index.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
