<template>
    <div id="custom-img">
        <div v-show="!loaded" class="placeholder">
            <div :style="{paddingBottom:`${rate*100}%`}"></div>
        </div>
        <img v-show="loaded" class="img" @load="loaded=true" :src="src" alt="">
    </div>
</template>

<script>
    import Vue from "vue"

    export default {
        name: "custom-img",
        props: {rate: Number, src: String},
        data() {
            return {
                loaded: false
            }
        },
        methods: {},
        computed: {},
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
    #custom-img{
        font-size:0;
        .placeholder{
            background:#ccc;
        }
        .img{
            width:100%;
            object-fit:contain;
            height:auto;
        }
    }
</style>