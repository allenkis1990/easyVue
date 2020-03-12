<template>
    <div>
        <div>test2</div>
        <ul>
            <li><a href="javascript:void(0)" @click="goState('home')">首页</a></li>
            <li><a href="javascript:void(0)" @click="goState('test2-a1')">a1</a></li>
            <li><a href="javascript:void(0)" @click="goState('test2-a2')">a2</a></li>
        </ul>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive || $route.meta.keepAlive===undefined"></router-view>
        </keep-alive>
        <router-view  v-if="$route.meta.keepAlive===false"></router-view>
    </div>
</template>

<script>
    export default {
        mounted(){
            console.log('test2');
        },
        data(){
            return {}
        },
        methods: {
            goState: function (stateName) {
                this.$router.push({name: stateName});
            }
        }
    }
</script>
<style lang="less" scoped>

</style>
