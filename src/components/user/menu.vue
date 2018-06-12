<template>
    <div class="user_menu">
        <Row>
            <Col span="10">
               <Row>
                   <Col span="8">
                      <img class="photo" src="../../assets/img/photo.png">
                   </Col>
                   <Col span="14" offset="1">
                       <p class="name">John Doe</p>
                       <label class="account">Account Value:</label>
                       <p class="value"><b>$100,000.00</b></p>
                   </Col>
                   <Col span="24" class="btn_box">
                       <a href="javascript:void(0)"><span>My Account</span></a>
                       <a href="javascript:void(0)"><span>Message</span></a>
                   </Col>
               </Row>
            </Col>
            <Col span="14">
               <Row class="menu_right" :gutter="30">
                   <Col span="8"><router-link to="/"><span>Portfolio Account Summary</span></router-link></Col>
                   <Col span="8"><router-link to="/"><span>Portfolio Performance</span></router-link></Col>
                   <Col span="8"><router-link to="/user/home"><span>Transactions</span></router-link></Col>
               </Row>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    name: 'user_menu',
    data() {
        return {}
    }
}
</script>
<style scoped>
.user_menu{
    width:100%;
    padding:75px 100px 0px 100px;
    background:#3d4669;
    color:#fff;
}
img.photo{
    width:100%;
    border:1px solid #fff;
    border-radius:27px;
    box-shadow:5px 10px 10px #2c344f;
}
p.name{
    font-size:30px;
    text-align:left;
    margin:50px 0px 30px;
}
label.account{
    display:block;
    font-size:20px;
    text-align:left;
    color:#c9d0e3;
}
p.value{
    margin-top:0px;
    font-size:40px;
    text-align:left;
}
p.value b{}
.btn_box{
    text-align:left;
    padding-top:20px;
}
.btn_box a{
  padding:1px;
  display:inline-block;
  width:110px;
  background:#1aa5d0;
  background: linear-gradient(#10d5db, #256ec2);
  background-clip: padding-box;
  border-radius:14px;
  margin-right:10px;
}
.btn_box a span{
  display: block;
  height:100%;
  background:#3d466a;
  border-radius:14px;
  line-height:15px;
  padding:15px 0px;
  color:#fff;
  font-size:16px;
  text-align:center;
}
.menu_right div a{
  padding:2px;
  display:inline-block;
  width:100%;
  background:#1aa5d0;
  background: linear-gradient(#10d5db, #256ec2);
  background-clip: padding-box;
  border-radius:10px;
}
.menu_right div a span{
  display: block;
  height:100%;
  background:#3d466a;
  border-radius:10px;
  line-height:30px;
  padding:35px 0px;
  color:#fff;
  font-size:23px;
}
.menu_right div a.router-link-exact-active{
  background:#138cd7;
  background: linear-gradient(left,#256dc2, #00aded);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1),inset 0px 1px 0px 0px rgba(255, 255, 255, 0.15);
}
.menu_right div a.router-link-exact-active span{
  background:#138cd7;
  background: linear-gradient(left,#256dc2, #00aded);
}
</style>