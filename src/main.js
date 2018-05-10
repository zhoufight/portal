// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import './assets/font-awesome/css/font-awesome.css'
import 'swiper/dist/css/swiper.css'

import 'assets/css/common.css'
//axios.defaults.baseURL = 'https://www.lychee-info.cn';

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.HOST = '/api'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})