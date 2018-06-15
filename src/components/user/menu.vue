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
                   <Col span="4" class="btn_box" style="padding-left:5px;"><Badge dot><router-link to="/user/message" class="user_btn sup_after" href="javascript:void(0)"><span>Message</span></router-link></Badge></Col>
               </Row>
            </Col>
            <Col :md="24" :lg="14">
               <Row class="menu_right" :gutter="30">
                   <Col span="8"><a :class="tabNum == 1?'active':''" @click="tab(1)" class="user_btn" href="javascript:void(0)"><span>Portfolio Account Summary</span></a></Col>
                   <Col span="8"><a :class="tabNum == 2?'active':''" @click="tab(2)" class="user_btn" href="javascript:void(0)"><span>Portfolio Performance</span></a></Col>
                   <Col span="8"><a :class="tabNum == 3?'active':''" @click="tab(3)" class="user_btn" href="javascript:void(0)"><span>Transactions</span></a></Col>
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
    },
    // 父子组件数据通信
    props:['tabNum'],
    methods: {
        tab(e){
            this.$emit('up',e);
        }
    }
    
}
</script>
<style scoped>
.user_menu{
    width:100%;
    /* padding:75px 100px 0px 100px; */
    /* margin-bottom:75px; */
    background:#3d4669;
    color:#fff;
}
.photo_account_row{
    text-align:left;
}
img.photo{
    width:100%;
    /* max-width:220px; */
    /* border:1px solid #fff; */
    border-radius:27px;
    box-shadow:5px 10px 10px #2c344f;
}
p.name{
    font-size:25px;
    margin:0px 0px 30px;
}
label.account{
    display:block;
    font-size:15px;
    color:#c9d0e3;
}
p.value{
    margin-top:0px;
    font-size:30px;
}
p.value b{}
.btn_box{
    padding-top:20px;
}
.btn_box .ivu-badge{
    width:100%;
}
.btn_box a{
  padding:1px;
  display:inline-block;
  /* max-width:110px; */
  max-width:100%;
  width:100%;
  border-radius:14px;
  /* margin-right:10px; */
}
/* .btn_box .ivu-badge a{
    max-width:100%;
} */
/* a.sup_after{
    position:relative;
    overflow-x:hidden;
}
a.sup_after:after{
   position: absolute;
   content:'';
   width:9px;
   height: 9px;
   background:#fff;
   border:2px solid #9bb7ff;
   border-radius:50%;
   left:7px;
   top:-4px;
   animation: leftright 1s linear infinite;
}
@keyframes leftright{
    0%{left:0px;}
    25%{left:25px;}
    50%{left:50px;}
    75%{left:100px;}
} */
.btn_box a span{
  display: block;
  height:100%;
  border-radius:14px;
  line-height:15px;
  padding:13px 0px;
  color:#fff;
  font-size:15px;
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
  line-height:25px;
  padding:8px 0px;
  color:#fff;
  font-size:20px;
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
a.user_btn.active{
  background:#138cd7;
  background: linear-gradient(to left,#256dc2, #00aded);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1),inset 0px 1px 0px 0px rgba(255, 255, 255, 0.15);
}
a.user_btn.active span{
  background:#138cd7;
  background: linear-gradient(to left,#256dc2, #00aded);
}
@media screen and (max-width:1199px){
    .photo_account_row{
        text-align:center;
        margin-bottom:35px;
    }
}

</style>