<template>
  <div class="login-in">
     <div class="row_1">
       <div class="login_row">
           <Row :gutter="30">
               <Col :span="24">
                  <h2>Welcome to the secure section of our website</h2>
               </Col>
               <Col :span="14">
                  <p><b>Register for an online account</b></p>
                  <p>Allan Gray Online lets you view and manage your investments securely</p>
                  <p>If you do not already have an Allan Gray Online account complete the online registration form and a Client Service Centre consultant will then contact you to confirm your registration telephonically.</p>
                  <p><b>First time investors </b></p>
                  <p>You can follow the Invest Now process to explore our funds and products and take the first step towards investing with us.</p>
               </Col>
               <Col :span="10">
                  <div class="login_box">
                      <h3><Icon type="locked"></Icon>Secure account login</h3>
                      <div class="input_div">
                        <label>User name</label>
                        <input type="text">
                      </div>
                      <div class="input_div">
                        <label>Password</label>
                        <input :type="pwd_type?'password':'text'">
                        <span @click="pwd_type = !pwd_type"><Icon :type="pwd_type?'eye':'eye-disabled'"></Icon></span>
                      </div>
                      <button>Log in<Icon type="log-in"></Icon></button>
                      <div class="clearfix"></div>
                      <a href="javascript:void(0)">Forgotten user name or password?</a>
                      <div class="clearfix"></div>
                  </div>
                  <p>By signing in to Allan Gray Online you are confirming that you have read and understood our terms and conditions.</p>
               </Col>
           </Row>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'login-in',
  data () {
    return {
      msg: '',
      pwd_type:true
    }
  },
  mounted () {
    document.title = 'AD Wealth | Login'
  }
}
</script>
<style scoped>
.row_1{
    max-width:1180px;
    margin:0 auto;
}
.login_row{
    border-top: 3px solid #c53146;
    padding: 115px 60px 50px;
    margin: 85px 0px 110px;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.3);
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
  background-color: #c53146;
  border-color: rgba(187,36,42,0.64);
  border: 1px solid transparent;
  cursor:pointer;
}
.login_box button:hover{
  color: #fff;
  background-color: #9c2737;
  border-color: rgba(136,26,30,0.64);
}
.login_box button .ivu-icon{
  margin-right:0px;
  margin-left:10px;
}
.login_box a{
  float:right;
  color: #c53146;
  font-size:14px;
  margin-top:20px;
}
</style>