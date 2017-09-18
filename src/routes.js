
// 引用模板
//vue
import Vue from 'vue';
//路由插件
import Router from 'vue-router';
import indexPage from './components/header.vue'
import homePage from './views/home.vue'
import aboutPage from './views/about.vue'
import letConst from './views/views_children/letConst.vue'
import classExtendsSuper from './views/views_children/classExtendsSuper.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            component:homePage
        },
        {
            path:'/about',
            component:aboutPage,
            children:[//子路由
                {path:'letConst',component:letConst},
                {path:'classExtendsSuper',component:classExtendsSuper}
            ]
        }
    ]
})