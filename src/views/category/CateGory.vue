<template>
    <div>这是分类</div>
</template>

<script>
    import {requestDefault} from '@/network/request.js'

    export default {
        name: "CateGory",
        data() {
            return {

            }
        },
        activated(){
            requestDefault({
                url:'/home/multidata',
            }).then(response=>{
                console.log(response);
            }).catch(err=>{
                console.log(err);
            })
        }
    }
</script>

<style scoped>

</style>