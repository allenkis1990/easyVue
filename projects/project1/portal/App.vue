<template>
  <div id="app">
    <!--top只要在第一个根上有就好-->
    <router-view name="top"></router-view>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive || $route.meta.keepAlive===undefined"></router-view>
    </keep-alive>
    <router-view  v-if="$route.meta.keepAlive===false"></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  data:function(){
    return {
    }
  },

  mounted:function(){

  },

  methods:{

  },
  components:{

  }
}
</script>

<!--lang="less"一定要加 否则less不生效-->
<style lang="less">
  @import '~@portal/less/main.less';/*完整*/
</style>

