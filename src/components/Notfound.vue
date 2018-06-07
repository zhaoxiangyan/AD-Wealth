<template>
 <div class="notfound">
    <p class="sorry_box"><span class="sorry">抱歉</span>，您所访问的页面不存在...</p>
    <p class="timeout"><span class="countdown">{{time}}</span>秒后自动跳转到<a href="/">AD Wealth</a></p>
 </div>
</template>
<script>
export default {
  name: 'notfound',
  data() {
      return {
      time:'5'
      };
  },
  mounted(){
    document.title = "404";
    this.countDown(); 
  },
  methods: {
    countDown() {
    var self = this;
    var _step = 4;
    var _res = setInterval(function(){
          self.time = _step;
          _step-=1;
          if(_step<= 0){
              self.$router.push('/');
              clearInterval(_res);
          }
      },1000);
      },
  }
}
</script>
<style scoped>
.sorry_box{
    font-size:36px;
    margin:200px 0 15px;
    color:#333;
}
.sorry_box .sorry{
    color:rgb(85,158,231);
}
.timeout{
    font-size:20px;
}
.timeout .countdown{
    font-weight:bold;
}
.timeout a{
    color:rgb(19,110,194);
}

</style>