<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// git提交测试test
export default {
  name: 'App'
}
</script>

<style>
body{
  margin:0;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Arial';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  padding:0;
}
.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden;}
/* .clearfix{*+height:1%;} */
</style>
