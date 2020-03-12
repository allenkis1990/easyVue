<template>
    <div>
        <div class="main" v-if="$route.name==='home'">
            <ul>
                <li><a href="javascript:void(0)" @click="goState('test1')">test1</a></li>
                <li><a href="javascript:void(0)" @click="goState('test2')">test2</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
        },
        methods: {
            goState: function (stateName) {
                this.$router.push({name: stateName});
            },
            goPath: function (path) {
                this.$router.push({path: path});
            }
        }
    }
</script>

<style lang="less">
    @import "~@portal/less/style1.less";
</style>