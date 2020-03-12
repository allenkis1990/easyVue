
import Vue from 'vue'
import App from '@portal/App.vue'
import router from '@portal/router/router'
import store from '@portal/store/store'
import mixin from '@portal/utils/mixin'
import elementUi from '@portal/utils/element-ui'
import { sync } from 'vuex-router-sync'
//把路由的对象放在全局的store里 this.$store.state.route
sync(store, router);

//使用element-ui并且把各插件挂载到Vue上
elementUi(Vue)
// 混合
Vue.mixin(mixin)


var vm = new Vue({
    el:'#app',
    router,
    store,
    template:'<App/>',
    components:{App}
});
window.$$$vm = vm

if(module.hot){
    module.hot.accept();
}
