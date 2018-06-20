<template>
  <div class="log-in">
     <div class="header clearfix">
        <div>
            <h2>AD Wealth</h2>
            <router-link to="/adw/invest-now" class="invest">INVEST NOW</router-link>
        </div>
     </div>
     <div class="row_1">
       <div class="login_row">
           <Row :gutter="30">
               <Col :span="24">
                  <h2>Welcome to the secure section of our website</h2>
               </Col>
               <Col :span="14">
                  <p><b>&nbsp;</b></p>
                  <p>AD Wealth Online lets you view and manage your investments securely.</p>
                  <p>Please use your registered email address as your login user name.</p>
                  <p><b>First time investors </b></p>
                  <p>You can follow the <router-link to="invest-now">Invest Now</router-link> process to explore our funds and products and take the first step towards investing with us.</p>
               </Col>
               <Col :span="10">
                  <div class="login_box">
                      <h3><Icon type="locked"></Icon>Secure account login</h3>
                      <div class="input_div">
                        <label>User name</label>
                        <input type="text" v-model="username">
                      </div>
                      <div class="input_div">
                        <label>Password</label>
                        <input v-model="password" :type="pwd_type?'password':'text'" >
                        <span @click="pwd_type = !pwd_type"><Icon :type="pwd_type?'eye':'eye-disabled'"></Icon></span>
                      </div>
                      <em v-show="login_error">{{login_error_text}}</em>
                      <button @click="login">Log in<Icon type="log-in"></Icon></button>
                      <div class="clearfix"></div>
                      <router-link to="/adw/forgotten-password">Forgotten password?</router-link>
                      <div class="clearfix"></div>
                  </div>
                  <p>By signing in to AD Wealth Online you are confirming that you have read and understood our <router-link to="/adw/AD-Wealth-Online-T&C-180605" target="_blank">Terms and Conditions.</router-link></p>
               </Col>
           </Row>
       </div>
     </div>
     <div class="footer"><p>© Copyright 2018 AD Wealth Inc. All rights reserved.</p></div>
  </div>
</template>

<script>
export default {
  name: 'log-in',
  data () {
    return {
      username:'',
      password:'',
      pwd_type:true,
      login_error:false,
      login_error_text:'password error',
      //   防止重复发送ajax
      ajax:false
    }
  },
  mounted () {
    document.title = 'AD Wealth | Login'
  },
  methods: {
    login(){
        var self = this;
        let emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        let pswReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        self.login_error = false;
        if(self.username == ''||self.password == ''){
          self.login_error_text = "can't be empty";
          self.login_error = true;
          return false;
        }else if(!emailReg.test(self.username)){
          self.login_error_text = 'username formatting error';
          self.login_error = true;
          return false;
        }else if(!pswReg.test(self.password)){
          self.login_error_text = 'password formatting error';
          self.login_error = true;
          return false;
        }else{
            if(self.ajax) return;
            self.ajax = true;
            self.$http.post('/user', {
                username:self.username,
                password:self.password
            }).then(function (res) {
                console.log('success');
                console.log(res); 
                self.ajax = false;
            }).catch(function (err) {
                console.log('error');
                console.log(err);
                self.ajax = false;
            });
            this.$router.push('/adw/user');
        } 
  
    }
  }
}
</script>
<style scoped>
.row_1{
    max-width:1180px;
    min-height:800px;
    margin:0 auto;
}
.login_row{
    /* border-top: 3px solid #c53146; */
    padding: 115px 60px 50px;
    /* margin: 85px 0px 110px; */
    /* box-shadow: 0 0 5px 0 rgba(0,0,0,0.3); */
}
.login_row .ivu-col{
  text-align:left;
}
.ivu-col h2{
  font-size:50px;
  line-height:48px;
  margin-bottom:30px;
  font-weight:300;
}
.ivu-col>p{
  margin-bottom:30px;
  font-size:18px;
}
.login_box{
  background-color: #f5f5f5;
  margin-bottom:35px;
  padding:25px 35px 30px;
}
.login_box h3{
  font-size:22px;
  font-weight:600;
  line-height:26px;
  margin-bottom:25px;
}
.login_box .ivu-icon{
  margin-right:10px;
}
.login_box em{
  display:block;
  color:red;
  font-style:normal;
}
.input_div{
  margin-bottom:35px;
  position:relative;
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
.input_div span{
  display:inline-block;
  position: absolute;
  right:0px;
  bottom:0px;
  font-size:20px;
}
.login_box button{
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
}
.login_box button:hover{
  color: #fff;
  /* background-color: #9c2737; */
  background:#0d7df3;
  /* border-color: rgba(136,26,30,0.64); */
}
.login_box button .ivu-icon{
  margin-right:0px;
  margin-left:10px;
}
.login_box a{
  float:right;
  /* color: #c53146; */
  color:#2d8cf0;
  font-size:14px;
  margin-top:20px;
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