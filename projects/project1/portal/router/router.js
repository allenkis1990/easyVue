
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
import Root from '@portal/views/root/root.vue'
import Top from '@portal/views/root/top.vue'

console.log(multiApp,333);
//Root.vue被作为第一个页面，其他路由全在Root的children里
export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: multiApp?'/portal':'/',
            redirect: function () {
                if(multiApp){
                    return '/portal/home'
                }else{
                    return '/home'
                }
            },
            name:'root',
            components: {
                default:Root,
                top:Top
            },
            children: [
                {
                    name: 'home',
                    path: 'home',
                    component: () => import('@portal/views/home/home.vue')
                },
                {
                    name: 'test1',
                    path: 'test1',
                    component: () => import('@portal/views/test1/test1.vue')
                },
                {
                    name:'test2',
                    path:'test2',
                    component:()=>import('@portal/views/test2/test2.vue'),
                    children:[
                        {
                            name:'test2-a1',
                            path:'test2-a1',
                            components:{
                                default:function(){
                                    return import('@portal/views/test2/a1.vue')
                                }
                            }
                        },
                        {
                            name:'test2-a2',
                            path:'test2-a2',
                            components:{
                                default:function(){
                                    return import('@portal/views/test2/a2.vue')
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
});


















