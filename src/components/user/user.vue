<template>
    <div class="user">
        <div class="header clearfix">
            <div>
                <h2>AD Wealth</h2>
            </div>
        </div>
        <userMenu></userMenu>
        <router-view/>
        <div class="footer"><p>© Copyright 2018 AD Wealth Inc. All rights reserved.</p></div>
    </div>
</template>
<script>
import userMenu from '../user/menu.vue'
export default {
    name: 'user',
    data () {
        return {}
    },
    mounted () {
        document.title = 'AD Wealth | User'
    },
    components: {
        userMenu
    }
}
</script>
<style scoped>
/* 头部，底部 */
.header{
    background:rgb(26,38,50);
}
.header div{
    max-width:1000px;
    margin:0 auto;
}
.header h2{
    float:left;
    width:100%;
    margin-right:-300px;
    line-height:95px;
    text-align:left;
    font-size:45px;
    color:#fff;
    font-weight:normal;
}
.footer{
    background:rgb(26,38,50);
}
.footer p{
    font-size:20px;
    color:#fff;
    line-height:30px;
    padding:15px 0px;
}
</style>