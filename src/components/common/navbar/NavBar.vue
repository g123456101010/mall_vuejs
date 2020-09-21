<template>
    <div class="nav-bar" :style="{background:navBarBgColor}">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        props: {
            navBarBgColor: {
                type: String,
                default: '#fff',
            }
        }
    }
</script>

<style scoped>
    .nav-bar {
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
        box-shadow: 0px 1px 1px rgba(150,150,150,.08);
    }

    .left, .right {
        width: 60px;
    }

    .center {
        flex: 1;
        font-size: var(--nav-title-size);
    }
</style>