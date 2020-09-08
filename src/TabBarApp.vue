<template>
    <div id="app">
        <div id="nav">
            <main-tab-bar/>
            <keep-alive>
                <router-view/>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    import MainTabBar from "components/tabbar/MainTabBar";

    export default {
        name: "TabBarApp",
        components: {
            MainTabBar
        }
    }
</script>

<style scoped>
    @import "assets/css/base.css";
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

</style>