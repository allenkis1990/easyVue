<template>
    <div id="appRoot">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive || $route.meta.keepAlive===undefined"></router-view>
        </keep-alive>
        <router-view  v-if="$route.meta.keepAlive===false"></router-view>
    </div>
</template>

<script>
    export default {
        mounted(){
            console.log('root');
        },
        data(){
            return {}
        },
        methods: {

        }
    }
</script>

