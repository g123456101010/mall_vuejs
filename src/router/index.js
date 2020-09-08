import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Message from "../views/home/Message";
import ShopCart from "../views/shopcart/ShopCart";
//通过use注册插件
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect:'/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta:{
            title:'首页',
        },
        beforeEnter:(to ,from, next)=>{
            console.log('进入首页')
            next();
        },
        children:[
            // {
            //     path: '/',
            //     redirect:'message'
            // },
            {
                path:'message',
                name:'Message',
                component:()=> import('../views/home/Message'),
            },
            {
                path: 'news',
                name: 'News',
                component: ()=>import('../views/home/News'),
            }
        ]

    },
    {
        path: '/category',
        name: 'Category',
        component: () => import('../views/category/CateGory'),
        meta: {
            title: '商品'
        }
    },
    {
        path: '/shopcart',
        name: 'ShopCart',
        component: () => import('../views/shopcart/ShopCart'),
        meta: {
            title: '购物车'
        }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
            title: '关于'
        }
    },
    {
        path: '/user/:userName/:userId',
        name: "User",
        component: () => import('../views/User.vue'),
        meta: {
            title: '用户'
        }
    },
    {
        path: '/profile',
        component: () => import('../views/proile/Profile'),
        meta: {
            title: '用户中心'
        }
    }
]

const router = new VueRouter({
    routes,
    //默认是hash方式，再这个地方改成history方式那么url中就没有#显示出来
    mode:'history',
})
router.beforeEach((to,from,next)=>{
    console.log(to);
    document.title = to.matched[0].meta.title;
    next();
});
router.afterEach(((to, from) => {
    console.log('跳转后回调');
}))
export default router
