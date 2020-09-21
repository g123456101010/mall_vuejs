<template>
    <div class="home">
        <img alt="Vue logo" src="../../../assets/logo.png">
        <!-- 如果路劲前面加/ 那么就要写全路径 否则只需要写子路径就行   但是只写子路径 用代码跳转有问题。所以还是要写全路劲-->
        <!--    router-link to="/home/message" tag="button">消息</router-link>-->
        <router-link to="/demo/home/message" tag="button">消息</router-link>
        <router-link to="/demo/home/news" tag="button">新闻</router-link>
        <router-view></router-view>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from 'components/HelloWorld.vue'
    import {prefix_url} from 'Utils/Constants.js'
    import axios from 'axios'


    export default {
        name: 'Home',
        data() {
            return {
                c_path: '/demo/home/message'
            }
        },
        components: {
            HelloWorld
        },
        created() {
        },
        activated() {
            console.log('activated');
            this.$router.push(this.c_path);
        },
        beforeRouteLeave(to, from, next) {
            console.log('beforeRouteLeave----', this.c_path);
            this.c_path = this.$route.path;
            next();
        },
        mounted() {
            // axios({
            //     url: 'http://123.207.32.32:8000/home/multidata',
            //     method: 'get'
            // }).then(response => {
            //     console.log(response);
            // }).catch(err => {
            //     console.log(err);
            // });

            // axios.get("http://123.207.32.32:8000/home/data", {
            //     params: {
            //         type: 'pop',
            //         page: 1
            //     }
            // }).then(response=>{
            //     console.log('response-------',response);
            // }).catch(err=>{
            //     console.log(err);
            // })
            console.log('prefix_url--------'+prefix_url);
            axios.all([
                axios({
                    url: prefix_url+'/home/multidata',
                    method: 'get'
                }),
                axios.get(
                    prefix_url+'/home/data',
                    {
                        params: {
                            type: 'pop',
                            page: 1
                        }
                    }
                )
            ]).
                // then(axios.spread((response1,response2)=>{
                //     console.log('response1-----------',response1);
                //     console.log('response2-----------',response2);
                // }))
                then(results=>{
                    console.log('reposne results---------',results);
                }).catch(err=>{
                console.log('reposne error---------',err);
            })

        },
    }
</script>
