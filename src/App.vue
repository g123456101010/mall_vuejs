<template>
    <div id="app">
        <div id="nav">
            <router-link to="/home" :replace="flag">Home</router-link>
            |
            <router-link to="/about" :replace="flag">About</router-link>
            |
            <router-link to="/about" tag="button" :replace="flag">about</router-link>
            |
            <router-link :to="'/user/'+userName+'/1111'" :replace="flag">User</router-link>
            |
            <el-button type="primary" size="mini" @click="goUserCenter">用户中心</el-button>
        </div>
        <button @click="changeFlag">测试replace属性{{flag}}</button>
        <br>
        <span>按钮js代码跳转</span>
        <button @click="goHome">home</button>
        |
        <button @click="goAbout">about</button>
        |
        <button @click="goBack">返回</button>
        <keep-alive>
            <router-view/>
        </keep-alive>

    </div>
</template>
<script>
    export default {
        name: 'APP',
        data() {
            return {
                flag: false,
                userName: '李四',
            }
        },
        methods: {
            changeFlag() {
                this.flag = !this.flag;
            },
            goHome() {
                if (this.flag) {
                    this.$router.replace('/home');
                } else {
                    this.$router.push('/home');
                }


            },
            goAbout() {
                if (this.flag) {
                    this.$router.replace('/about');
                } else {
                    this.$router.push('/about');
                }

            },
            goBack() {
                this.$router.go(-1);

            },
            goUserCenter() {
                this.$router.push({
                    path: '/profile',
                    query: {userName: '夜游神', id: 'qweqds', age: 30}
                })
            }
        }
    }
</script>
<style>
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

    #nav .router-link-exact-active {
        color: #42b983;
    }
</style>
