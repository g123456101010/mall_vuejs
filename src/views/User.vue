<template>
    <div>
        <label>{{userName}}</label>
        <br>
        <label>{{$route.params.userId}}</label>
    </div>
</template>

<script>
    export default {
        name: "User",
        data(){
            return {
                userName:this.$route.params.userName,
            }
        },
        created() {
        }
    }
</script>

<style scoped>

</style>