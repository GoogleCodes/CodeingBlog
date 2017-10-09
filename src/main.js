// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//  导入样式
import 'element-ui/lib/theme-default/index.css'

//  导入Vue框架
import Vue from 'vue'

//  导入主视图文件
import App from './App'

//  导入组件
import router from './router'

import resource from 'vue-resource'

//  导入element组件
import ElementUI from 'element-ui'

//  导入API
import { fetchGet, fetchPost, fetchPut, fetchDelete } from './router/utils.js'

Vue.prototype.$getData = fetchGet;
Vue.prototype.$postData = fetchPost;
Vue.prototype.$putData = fetchPut;
Vue.prototype.$deleteData = fetchDelete;

//使用element-ui
Vue.use(ElementUI);

Vue.use(resource);

//  发布后是否显示提示
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

