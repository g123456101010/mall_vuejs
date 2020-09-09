<template>
    <div>
        <tab-bar>
            <tab-bar-item link-url="/home">
                <img src="~assets/img/tabbar/home.svg" slot="icon">
                <img src="~assets/img/tabbar/home_active.svg" alt="" slot="active-icon">
                <label slot="text">首页</label>
            </tab-bar-item>
            <tab-bar-item link-url="/category">
                <img src="~assets/img/tabbar/category.svg" slot="icon">
                <img src="~assets/img/tabbar/category_active.svg" alt="" slot="active-icon">
                <label slot="text">商品</label>
            </tab-bar-item>
            <tab-bar-item link-url="/shopcart">
                <img src="~assets/img/tabbar/shopcart.svg" slot="icon">
                <img src="~assets/img/tabbar/shopcart_active.svg" alt="" slot="active-icon">
                <label slot="text">购物车</label>
            </tab-bar-item>
            <tab-bar-item link-url="/profile">
                <img src="~assets/img/tabbar/profile.svg" slot="icon">
                <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="active-icon">
                <label slot="text">我的</label>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
    import TabBar from "./TabBar";
    import TabBarItem from "./TabBarItem";
    export default {
        name: "MainTabBar",
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>