import VueRouter from 'vue-router'

//组件按需加载
// const 组件名 = () => import('组件路径');
// const Main = ()=>import('@/components/Main')

//添加以下代码
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  
  mode:'history',
  base:window.location.host=='newweihe.manpao.net'?"/api/h5devjccdiscuss/gw/smartvillage1":'',
  // mode:window.location.host=='newweihe.manpao.net'?'hash':'history',
  scrollBehavior (to, from, savedPosition) {
    // console.log('-scrollBehavior-',to.fullPath,from.fullPath)
    let idstr = to.query.id
    if(idstr){
      let el = document.getElementById(idstr)
      let headview = document.getElementById('headview')
      let top = el.offsetTop
      // if(to.fullPath==from.fullPath){
      //   top = 0
      //   //top += headview.clientHeight;
      //   //console.log('scrollBehavior-',to,from,savedPosition)
      // }else{
        if(from.name!='home'){
          top -= headview.clientHeight;
        }
      // }

      
      
      return {x: 0, y: top ,behavior: 'smooth'}

    }
    return { x: 0, y: 0 }
  },
  routes: [
    // { path: '*', component: NotFoundComponent },
    {
      path: '/',
      name: 'main',
      component: resolve => require(['@/components/Main'],resolve),
      // component:Main,
      redirect: '/',//页面默认加载的路由
      children:[
        {
          path: '/',
          name: 'home',
          //component:() => import('@/components/main/home'),
          component: resolve => require(['@/components/main/home'],resolve),
        },
        {
          path: '/aboutus',
          name: 'aboutus',
          // component:() => import('@/components/aboutus/aboutuspage.vue'),
          component: resolve => require(['@/components/aboutus/aboutuspage.vue'],resolve),
        
        },
        {
          path: '/news',
          name: 'news',
          // component:() => import('@/components/news/newpage.vue'),
          component:resolve => require(['@/components/news/newpage.vue'],resolve),
        },
        // {
        //   path: '/vslogin',
        //   name: 'vslogin',
        //   component:resolve => require(['@/components/zyzlogin/zyzloginpage.vue'],resolve),
        // }
    

      ]
    }
    
    
  ]
})
export default router
