<template>
    <div>
        <ul>
            <li><a href="javascript:void(0)" @click="goState('home')">首页</a></li>
        </ul>
        test1
    </div>
</template>

<script>
    import data1 from '@portal/data/data1.js'
    console.log(data1,'data1');
    export default {
        mounted(){
            console.log('test1');
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
