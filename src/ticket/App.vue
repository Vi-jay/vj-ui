<template>
    <div id="App">
        <header class="c-header">
            <img class="c-header__logo" src="./images/img_logo_01@2x.png" alt="">
            <ul class="header-list">
                <li class="active">首页</li>
                <li>我们的优势</li>
                <li>合作伙伴</li>
                <li>联系我们</li>
                <li>接入文档</li>
                <li>用户登陆</li>
            </ul>
            <em class="c-header__tip">适龄提示:全年龄段玩家</em>
        </header>
        <main class="l-main">
            <custom-img :src="IMAGES[0]" :rate="130/192"/>
            <custom-img :src="IMAGES[1]" :rate="120/192"/>
            <custom-img :src="IMAGES[2]" :rate="120/192"/>
            <custom-img :src="IMAGES[3]" :rate="119/192"/>
            <custom-img :src="IMAGES[4]" :rate="60/192"/>
        </main>
        <footer class="c-footer">
            <aside class="footer-aside">
                <img class="footer-aside__logo" src="./images/img_logo_07@2x.png" alt="">
                <div class="footer-aside__btn"><img class="footer-aside__icon" src="./images/img_logo_08@2x.png" alt="">QQ交谈
                </div>
            </aside>
            <ul class="footer-list">
                <li class="footer-list__item">
                    <h3 class="footer-list__title">联系方式</h3>
                    <p>地址一:上海市某某某上海市某某海市某某</p>
                    <p>地址一:上海市某某某上海市某某海市某某</p>
                    <p>联系电话：123123123</p>
                    <p>邮箱：123123123</p>
                </li>
                <li class="footer-list__item">
                    <h3 class="footer-list__title">用户协议</h3>
                    <p>《游戏平台用户服务协议》<br>《游戏平台用户守则》</p>
                </li>
                <li class="footer-list__item">
                    <h3 class="footer-list__title">家长监护工程</h3>
                    <p>链接入口</p>
                </li>
                <li class="footer-list__item">
                    <h3 class="footer-list__title">游戏健康忠告</h3>
                    <p>抵制不良游戏，拒绝盗版游戏。<br>注意自我保护，谨防受骗上当。<br>适度游戏益脑，沉迷游戏伤身。<br>合理安排时间，享受健康生活。</p>
                </li>
            </ul>
        </footer>
        <aside class="l-address">
            <div class="small">Copyright @2016公司名称www.****** .COM版权所有|沪ICP备14053315号</div>
        </aside>
    </div>
</template>

<script>

    import CustomImg from "./custom-img";

    const IMAGES = [
        require("./images/img_logo_02@2x.png"),
        require("./images/img_logo_03@2x.png"),
        require("./images/img_logo_04@2x.png"),
        require("./images/img_logo_05@2x.png"),
        require("./images/img_logo_06@2x.png"),
        require('./images/img_logo_02@2x.png')];
    export default {
        name: "App",
        data() {
            return {IMAGES}
        },
        components: {CustomImg},
        methods: {},
        computed: {},
        mounted() {

        }
    }
</script>

<style lang="scss">
    @import "common";
    #App{
        font-size:12px;
        min-width:1000px;
        .c-header{
            @include flex-center;
            color:white;
            background:#12191D;
            padding-bottom:10px;
            &__logo{
                @include rect(50px);
                object-fit:cover;
                display:block;
                background:#ccc;
            }
            &__tip{
                color:#73BE5A;
                transform:scale(.8);
                margin-left:50px;
            }
            .header-list{
                @include alignCenter;
                &:hover .active:before{
                    transform:scaleX(0);
                }
                li{
                    margin-left:20px;
                    padding:20px 0;
                    width:60px;
                    position:relative;
                    text-align:center;
                    cursor:pointer;
                    &.active:before, &:after{
                        @include absoluteFull;
                        bottom:0;
                        height:3px;
                        background:#3C8CDD;
                        content:"";
                        transform:scaleX(0);
                        transition:all .2s;
                    }
                    &.active:before{
                        transform:scaleX(1);
                    }
                    &:hover{
                        &:after{
                            transform:scaleX(1);
                        }
                    }
                }
            }
        }
        .l-main{
        }
        .c-footer{
            display:flex;
            justify-content:center;
            background:#2E2E2E;
            color:white;
            padding:30px 0 10px;
            .footer-aside{
                @include flex-center;
                flex-direction:column;
                &__logo{
                    @include rect(50px);
                    object-fit:cover;
                    display:block;
                    background:#ccc;
                }
                &__btn{
                    border:1px solid #fff;
                    padding:2px 26px;
                    margin-top:26px;
                    transform:scale(.8);
                    @include alignCenter;
                }
                &__icon{
                    @include rect(20px);
                    display:block;
                    object-fit:cover;
                    background:white;
                    margin-right:6px;
                    margin-bottom:3px;
                }
            }
            .footer-list{
                display:flex;
                transform:scale(.8);
                &__item{
                    width:168px;
                    flex-shrink:0;
                    &:not(:first-child){
                        text-align:center;
                        margin-left:13px;
                    }
                }
                &__title{
                    color:#4588CD;
                    text-align:center;
                    font-size:12px;
                    margin-bottom:16px;
                }
                p{
                    margin-top:20px;
                    line-height:1.7;
                }
            }
        }
        .l-address{
            text-align:center;
            color:white;
            background:#141820;
            padding:8px 0;
            .small{
                transform:scale(.8);
            }
        }
    }

</style>