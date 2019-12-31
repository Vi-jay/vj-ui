<template>
    <div id="App">double_gift<async-cmp></async-cmp></div>
</template>

<script>
    const asyncCmp = ()=>import("./async-cmp.vue");

    export default {
        name: "App",
        data() {
            return {}
        },
        components:{asyncCmp},
        methods: {},
        computed: {},
        created() {
        }
    }
</script>

<style lang="css" scoped>
    #App {
        background: aqua;
    }
</style>