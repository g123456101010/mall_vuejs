<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActived" class="item-icon">
            <slot name="icon"></slot>
        </div>
        <div v-else class="item-active-icon">
            <slot name="active-icon"></slot>
        </div>
        <div :style="activeTextStyle">
            <slot name="text"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
            linkUrl:{
                type:String,
                required:true
            },
            activeTextColor:{
                type: String,
                default:'#ff5777'
            }
        },
        data(){
            return {

            }
        },
        computed:{
            isActived(){
                return this.$route.path.indexOf(this.linkUrl)!==-1;
            },
            activeTextStyle(){
                return {
                    fontSize: '15px',
                    color:(this.isActived ? this.activeTextColor : '#000000'),
                }
            }
        },
        methods:{
            itemClick(){
                this.$router.replace(this.linkUrl);
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item{
        flex: 1;
        text-align: center;
    }
    .tab-bar-item img {
        height: 20px;
        width: 20px;
        margin-top: 3px;
        vertical-align: middle;
        margin-bottom: 2px;
    }
</style>