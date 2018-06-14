<template>
    <div class="user_menu">
        <Row>
            <Col :md="24" :lg="10">
               <Row class="photo_account_row" type="flex" justify="center" align="bottom">
                   <Col :md="24" :lg="8">
                      <img class="photo" src="../../assets/img/photo.png">
                   </Col>
                   <Col :md="24" :lg="{span:15,offset:1}">
                       <p class="name">John Doe</p>
                       <label class="account">Account Value:</label>
                       <p class="value"><b>$100,000.00</b></p>
                   </Col>
               </Row>
               <Row>
                   <Col span="4" class="btn_box" style="padding-right:5px;"><router-link class="user_btn" to="/user/account"><span>My Account</span></router-link></Col>
                   <Col span="4" class="btn_box" style="padding-left:5px;"><a class="user_btn" href="javascript:void(0)"><span>Message</span></a></Col>
               </Row>
            </Col>
            <Col :md="24" :lg="14">
               <Row class="menu_right" :gutter="30">
                   <Col span="8"><router-link class="user_btn" to="/"><span>Portfolio Account Summary</span></router-link></Col>
                   <Col span="8"><router-link class="user_btn" to="/"><span>Portfolio Performance</span></router-link></Col>
                   <Col span="8"><router-link class="user_btn" to="/user/home"><span>Transactions</span></router-link></Col>
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
    /* padding:75px 100px 0px 100px; */
    margin-bottom:75px;
    background:#3d4669;
    color:#fff;
}
.photo_account_row{
    text-align:left;
}
img.photo{
    width:100%;
    max-width:250px;
    /* border:1px solid #fff; */
    border-radius:27px;
    box-shadow:5px 10px 10px #2c344f;
}
p.name{
    font-size:30px;
    margin:0px 0px 30px;
}
label.account{
    display:block;
    font-size:20px;
    color:#c9d0e3;
}
p.value{
    margin-top:0px;
    font-size:40px;
}
p.value b{}
.btn_box{
    padding-top:20px;
}
.btn_box a{
  padding:1px;
  display:inline-block;
  max-width:110px;
  width:100%;
  border-radius:14px;
  /* margin-right:10px; */
}
.btn_box a span{
  display: block;
  height:100%;
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
  border-radius:10px;
}
.menu_right div a span{
  display: block;
  height:100%;
  border-radius:10px;
  line-height:30px;
  padding:8px 0px;
  color:#fff;
  font-size:23px;
  /* transition: background 0.5s; */
}
/* .menu_right div a.router-link-exact-active,.menu_right div a:hover,.btn_box a:hover{
  background:#138cd7;
  background: linear-gradient(left,#256dc2, #00aded);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1),inset 0px 1px 0px 0px rgba(255, 255, 255, 0.15);
}
.menu_right div a.router-link-exact-active span,.menu_right div a:hover span,.btn_box a:hover span{
  background:#138cd7;
  background: linear-gradient(left,#256dc2, #00aded);
} */
@media screen and (max-width:1199px){
    .photo_account_row{
        text-align:center;
        margin-bottom:35px;
    }
}

</style>