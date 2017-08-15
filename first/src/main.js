// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//注册组件,同级目录
import App from './App.vue' //等价于 var app = require('./App')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  //注册一个app组件
  components: { App }
})
