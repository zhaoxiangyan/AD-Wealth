<template>
    <div class="index">
      <!-- <h3>Ad-Wealth Website</h3>
      <router-link to="/login">Login Page</router-link>
      <router-link to="/register">Register Page</router-link>
      <router-link to="/contact-us">Contact-us Page</router-link>
      <router-link to="/fund-pages/balanced-fund">Balanced-fund Page</router-link>
      <router-link to="/fund-pages/equity-fund">Equity-fund Page</router-link>
      <router-link to="/fund-pages/stable-fund">Stable-fund Page</router-link>
      <router-link to="/admin/home">Admin</router-link> -->
        <div class="video_box">
            <video src="../assets/video/video_bg.mp4" autoplay="autoplay" loop="loop"></video>
            <img src="../assets/img/video_img.jpg">
            <div class="text_box">
                <span>
                  <div class="table_cell">
                    <transition enter-active-class="animated fadeInRightBig" leave-active-class="animated fadeOutLeftBig"><h3 v-show="title" v-text="text1"></h3></transition>
                    <transition enter-active-class="animated fadeInLeftBig" leave-active-class="animated fadeOutRightBig"><p v-show="text" v-text="text2"></p></transition>
                    <div class="button_box" :class="first?'first':''">
                        <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDownBig"><router-link to="/adw/log-in" v-show="btn" class="log" href="javascript:void(0)">LOG IN</router-link></transition>
                        <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDownBig"><router-link to="/adw/invest-now" v-show="btn" class="now" href="javascript:void(0)">INVEST NOW</router-link></transition>
                    </div>
                  </div>
                </span>
            </div>
            <p class="copyright">© Copyright 2018 AD Wealth Inc. All rights reserved.</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      first:true,
      title:false,
      text:false,
      btn:false,
      text_status: true,
      text1: 'AD Wealth Inc.',
      text2: 'Today. Tomorrow. Together.'
    }
  },
  mounted () {
    var self = this;
    document.title = 'AD Wealth';
    this.$nextTick(()=>{
        this.title = true;
        this.text = true; 
        this.btn = true;
    })
    // setTimeout(function(){self.btn = true},300)
    self.first = false;
    setInterval(function(){
      self.title = false;
      self.text = false;
      self.btn = false;
      self.text_status = !self.text_status;
      if(self.text_status){
        self.text1 = 'AD Wealth Inc.';
        self.text2 = 'Today. Tomorrow. Together.';
      }else{
        self.text1 = 'ADW UNIT TRUST';
        self.text2 = 'Building long-term wealth for our clients';
      }
      setTimeout(function(){
        self.title = true;
        self.text = true;
      },1000)
      setTimeout(function(){self.btn = true;},2000)
    },11000)
  }
}
</script>
<style scoped>
.index{
  margin:0;
  padding:0;
}
.video_box{
  position: relative;
  overflow:hidden;
  height:100vh;
}
.video_box video{
  width:100%;
  height:100%;
  /* max-height:100vh; */
  object-fit:cover;
}
.video_box img{
  display: none;
}
.video_box .text_box{
  position: absolute;
  top:0px;
  right: 0px;
  bottom:0px;
  left:0px;
  background:rgba(0,0,0,0.2);
  color:#fff;
}
.text_box span{
  display: table;
  width:100%;
  height:100%;
}
.text_box span div.table_cell{
  display:table-cell;
  vertical-align:middle;
}
.text_box h3{
  font-size:45px;
  letter-spacing:1px;
}
.text_box p{
  letter-spacing:1px;
  font-size:35px;
}
.text_box .button_box{
  margin-top:100px;
  margin-bottom:70px;
  height:60px;
}
.button_box a{
  display:inline-block;
  width:180px;
  height:60px;
  line-height:60px;
  font-size:16px;
  color:#fff;
  border:2px solid #fff;
  font-weight:bold;
  letter-spacing:1px;
  border-radius:2px;
}
.button_box a.first{
  animation-delay:1s;
}
.button_box a.log{
  background:#3b7ddb;
  margin-right:100px;
}
.button_box a.now{
  background:#b49401;
  margin-left:100px;
}
.video_box p.copyright{
  font-size:15px;
  position: absolute;
  bottom:45px;
  left: 0px;
  right:0px;
  color:#fff;
}
@media screen and (max-width:767px){
   .button_box a.log{
     margin-right:30px;
   }
   .button_box a.now{
     margin-left:30px;
   }
}
@media screen and (max-width:560px){
  .video_box video{
    display:none;
  }
  .video_box img{
    display:block;
    height:100%;
    position: relative;
    left:-480px;
  }
  .text_box h3{
    font-size:35px;
    letter-spacing:0px;
  }
  .text_box p{
    letter-spacing:0px;
    font-size:25px;
  }
  .text_box .button_box{
    margin-top:50px;
    margin-bottom:35px;
  }
  .button_box a{
    max-width:140px;
  }
  .button_box a.log{
     margin-right:15px;
     margin-left:15px;
     margin-top:15px;
   }
   .button_box a.now{
     margin-right:15px;
     margin-left:15px;
     margin-top:15px;
   }
}
</style>