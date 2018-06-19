<template>
  <div class="forgotten-password">
     <div class="header clearfix">
        <div>
            <h2>AD Wealth</h2>
            <router-link to="/adw/invest-now" class="invest">INVEST NOW</router-link>
        </div>
     </div>
     <div class="row_1">
       <div class="forgotten_row">
          <h2>Forgotten your password?</h2>
          <p>Please enter your registered email address below.  We will send you a one time password to the cell phone number that we have for you on record.</p>
          <div class="forgotten_box">
              <div class="input_div">
                <label>Your registered email address</label>
                <input type="text">
              </div>
              <button>Send</button>
              <div class="clearfix"></div>
          </div>
          <router-link to="/adw/log-in" class="log-in">Log in</router-link>
          <div class="clearfix"></div>
       </div>
     </div>
     <div class="footer"><p>© Copyright 2018 AD Wealth Inc. All rights reserved.</p></div>
  </div>
</template>

<script>
export default {
  name: 'forgotten-password',
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    document.title = 'AD Wealth | Forgotten Password'
  }
}
</script>
<style scoped>
.row_1{
    max-width:1180px;
    min-height:800px;
    margin:0 auto;
}
.forgotten_row{
    /* border-top: 3px solid #c53146; */
    padding: 115px 60px 50px;
    /* margin: 85px 0px 110px; */
    /* box-shadow: 0 0 5px 0 rgba(0,0,0,0.3); */
}
.forgotten_row{
  text-align:left;
}
.forgotten_row h2{
  font-size:50px;
  line-height:48px;
  margin-bottom:30px;
  font-weight:300;
}
.forgotten_row>p{
  margin-bottom:30px;
  font-size:18px;
}
.forgotten_box{
  background-color: #f5f5f5;
  margin-bottom:35px;
  padding:25px 35px 30px;
}

.input_div{
  margin-bottom:35px;
  float: left;
  width:80%;
}
.input_div label{
  display: block;
  font-size:14px;
}
.input_div input{
  display: block;
  font-size:24px;
  border:none;
  border-bottom:1px solid #c3c3c3;
  background:#f5f5f5;
  outline:0;
  width:100%;
}
.forgotten_box button,a.log-in{
  float: right;
  font-size: 18px;
  font-weight: 400;
  padding: 10px 20px;
  color: #fff;
  /* background-color: #c53146; */
  border-color: rgba(187,36,42,0.64);
  background:#2d8cf0;
  border: 1px solid transparent;
  cursor:pointer;
  margin-top:10px;
  width:120px;
}
a.log-in{
  margin-top:60px;
  margin-right:100px;
  text-align:center;
}
.forgotten_box button:hover,a.log-in:hover{
  color: #fff;
  /* background-color: #9c2737; */
  background:#0d7df3;
  /* border-color: rgba(136,26,30,0.64); */
}


/* 头部，底部 */
.header{
    background: #3b7ddb;
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
.header a{
    padding:0px 20px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: #fff;
    border: 2px solid #fff;
    font-weight: bold;
    letter-spacing: 1px;
    border-radius: 2px;
    background:#b49401;
    float:right;
    margin-top:27px;
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