<template>
    <div id="recommend-view">
        <div v-for="(item) in recommends" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image">
                <br>
                <span>{{item.title}}</span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MH_RecommendView",
        props:{
            recommends:{
                type:Array,
                default(){
                    return [];
                }
            }
        }
    }
</script>

<style scoped>
    #recommend-view{
        display: flex;
        padding: 10px 0px 20px 0px;
        border-bottom: 10px solid #eeeeee;
        /*text-align: center;*/
    }
    .recommend-item{
        flex: 1;
    }
    .recommend-item img{
        width: 72px;
        height: 72px;
        margin-bottom: 5px;
    }
    .recommend-item span{
        font-size: var(--font-size);
    }
</style>