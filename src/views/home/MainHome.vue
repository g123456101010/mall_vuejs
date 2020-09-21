<template>
    <div id="main-home">
        <nav-bar nav-bar-bg-color="var(--color-tint)">
            <div slot="center">
                <label style="color: white">蘑菇街</label>
            </div>
        </nav-bar>
        <main-home-swiper :banners="banners"></main-home-swiper>
        <m-h_-recommend-view :recommends="recommends"></m-h_-recommend-view>
    </div>
</template>

<script>

    //子组件
    import MainHomeSwiper from "./childComps/MainHomeSwiper";
    import MH_RecommendView from "./childComps/MH_RecommendView";
    //公共组件
    import NavBar from "components/common/navbar/NavBar";
    //接口请求
    import {getMultiData} from "network/home_network";

    export default {
        name: "MainHome",
        props: {},
        components: {
            MainHomeSwiper,
            NavBar,
            MH_RecommendView,
        },
        data() {
            return {
                //轮播图数据
                banners:[],
                recommends:[],
            }
        },
        created() {
            getMultiData().then(res=>{
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list;
            })
        },
        methods: {}
    }
</script>

<style scoped>
</style>