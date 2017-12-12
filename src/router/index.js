import Vue from 'vue'
import Router from 'vue-router'

//  首页
import Index from '@/components/Index'

import news from '@/components/pages/news'

Vue.use(Router);

let routes = [{
  path: '/',
  name: 'Index',
  component: Index,
  meta: {
    header: true,
    footer: true,
  },
},{
  path: '/pages/news',
  name: 'news',
  component: news,
  meta: {
    header: true,
    footer: true,
  },
}];


const router = new Router({
  routes,
  mode: 'hash', //default: hash ,history
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
});

// 全局路由配置
// 路由开始之前的操作
router.beforeEach((to, from, next) => {
  next();
});


export default router;
