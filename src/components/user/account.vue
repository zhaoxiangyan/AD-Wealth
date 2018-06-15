<template>
    <div class="account">
        <div class="account_box">
            <div class="top clearfix">
                <h3>My&nbsp;Account</h3>
                <router-link class="user_btn" to="/user">
                    <span>Dashboard</span>
                </router-link>
            </div>
            <div class="user_account">
                <Row class="photo_row" type="flex" justify="center" align="middle">
                    <Col :md="4" :lg="2">
                    <img src="../../assets/img/photo.png">
                    </Col>
                    <Col :md="20" :lg="22" class="photo_text_col">
                    <p>Change Avatar Image</p>
                    <Upload action="ad-wealth/avatar">
                        <a href="javascript:void(0)" class="user_btn"><span>Upload new image</span></a>
                    </Upload>
                    </Col>
                </Row>
                <Row class="title_row">
                    <Col>Personal information</Col>
                </Row>
                <Row class="personal_row" type="flex" justify="center" align="bottom">
                    <Col :xs="24" :lg="10" class="left_col">
                        <Row>
                            <Col span="11">Name:</Col>
                            <Col span="13">John Doe</Col>
                        </Row>
                        <Row>
                            <Col span="11">D.O.B.:</Col>
                            <Col span="13">6/18/1978</Col>
                        </Row>
                        <Row>
                            <Col span="11">Email address:</Col>
                            <Col span="13">abc@abc.com</Col>
                        </Row>
                        <Row>
                            <Col span="11">Password:</Col>
                            <Col span="13" class="password_col"><input class="user_input" v-bind:value="password" :type="password_type?'password':'text'" readonly><span @click="password_type = !password_type"><Icon  :type="password_type?'eye':'eye-disabled'"></Icon></span></Col>
                        </Row>
                    </Col>
                    <Col :md="24" :lg="14" class="right_col">
                        <Row type="flex"  align="bottom">
                            <Col :md="5"><label class="change_label"><input type="checkbox" v-model="change1"><span></span>Change</label></Col>
                            <Col :md="6" v-show="change1">New Email address:</Col>
                            <Col :md="13" v-show="change1">
                                <Row class="send_row" :gutter="30" type="flex" justify="center" align="bottom">
                                    <Col :md="12"><input class="user_input"></Col>
                                    <Col :md="12" class="send_btn_col"><a class="user_btn" href="javascript:void(0)"><span>Send verification email</span></a></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="5"><label class="change_label"><input type="checkbox" v-model="change2"><span></span>Change</label></Col>
                            <Col span="6" v-show="change2">New Password:</Col>
                            <Col span="13" v-show="change2">
                                <Row class="new_password_row"  :gutter="30">
                                    <Col span="12"><input class="user_input" type="password" placeholder="Type new password"></Col>
                                    <Col span="12"><input class="user_input" type="password" placeholder="Retype new password"></Col>
                                    <Col span="24"><a class="user_btn" href="javascript:void(0)"><span>Save</span></a></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row class="address_row" type="flex" justify="center" align="bottom">
                    <Col :xs="24" :lg="10" class="left_col">
                        <Row>
                            <Col span="11" class="blue_star_after">Registered Address:</Col>
                            <Col span="13">No.123, Any St.</Col>
                        </Row>
                        <Row>
                            <Col span="11">City:</Col>
                            <Col span="13">Shenzhen</Col>
                        </Row>
                        <Row>
                            <Col span="11">State/Postal Code:</Col>
                            <Col span="13">Guangdong</Col>
                        </Row>
                        <Row>
                            <Col span="11">Country:</Col>
                            <Col span="13">China</Col>
                        </Row>
                    </Col>
                    <Col :md="24" :lg="14" class="blue_star_before right_col">
                        Registered address can be changed by sending your latest proof of address to us via Email
                    </Col>
                </Row>
                
                <Row class="bank_row">
                    <Col :md="24" :lg="10" class="left_col">
                        <Row>
                            <Col span="11">Registered banking details:</Col>
                            <Col span="13">1</Col>
                        </Row>
                        <Row>
                            <Col span="11">Bank name:</Col>
                            <Col span="13">2</Col>
                        </Row>
                        <Row>
                            <Col span="11">Bank branch:</Col>
                            <Col span="13">3</Col>
                        </Row>
                        <Row>
                            <Col span="11">Bank account name:</Col>
                            <Col span="13">4</Col>
                        </Row>
                        <Row>
                            <Col span="11">Bank account number:</Col>
                            <Col span="13">5</Col>
                        </Row>
                    </Col>
                    <Col :md="24" :lg="14" class="right_col">
                        <Row>
                            <Col span="5"><label class="change_label"><input type="checkbox" v-model="change3"><span></span>Change</label></Col>
                            <Col span="6" v-show="change3">New banking details:</Col>
                            <Col span="13"></Col>
                        </Row>
                        <Row  v-show="change3">
                            <Col span="6" offset="5">Bank name:</Col>
                            <Col span="13"><input class="user_input"></Col>
                        </Row>
                        <Row  v-show="change3">
                            <Col span="6" offset="5">Bank branch:</Col>
                            <Col span="13"><input class="user_input"></Col>
                        </Row>
                        <Row  v-show="change3">
                            <Col span="6" offset="5">Bank account name:</Col>
                            <Col span="13"><input class="user_input"></Col>
                        </Row>
                        <Row  v-show="change3">
                            <Col span="6" offset="5">Bank account number:</Col>
                            <Col span="13"><input class="user_input"></Col>
                        </Row>
                        <Row  v-show="change3">
                            <Col class="save_col" span="13"  offset="11"><a href="javascript:void(0)" class="user_btn"><span>Save</span></a></Col>
                        </Row>
                    </Col>
                </Row>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'account',
    data () {
        return {
            password_type:true,
            password:'1212121212001478',
            change1:false,
            change2:false,
            change3:false
        }
    }
}
</script>
<style scoped>
.account{
    text-align:left;
    background:#313958;
    background:linear-gradient(to top,#262e48,#434c70);
    color:#fff;
    /* padding: 30px 100px 120px 100px; */
    width:100%;
}
.account_box{
    padding:30px 0px 100px;
    width:100%;
    max-width:1520px;
    margin:0 auto;
}
.top h3{
    float:left;
    color:#18abd1;
    background-image: linear-gradient(to top, #2470c3, #10d5db);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height:47px;
    font-size:20px;
}
.top a{
    float:right;
    height: 47px;
    padding:1px;
    border-radius:10px;
    width:320px;
}
.top a span{
    display:block;
    width:100%;
    height:45px;
    line-height:45px;
    border-radius:10px;
    font-size:20px;
}
.user_account{
    font-size:18px;
}
.user_account>div{
    padding-bottom:10px;
}
.photo_row{
    margin-top:7px;
}
.photo_text_col{
    padding-left:40px;
}
.photo_row div img{
    max-width:250px;
    width:100%;
    /* border:1px solid #fff; */
    border-radius:27px;
    box-shadow:5px 10px 10px #2c344f;
}
.photo_row div p{
    font-size:15px;
    margin:5px 0px 16px;
}
.photo_row div a{
    width:145px;
    height:34px;
}
.photo_row div span{
    line-height:32px;
    font-size:15px;
}
.title_row div{
    font-size:30px;
    /* margin-top:25px; */
}
.personal_row{}
.left_col .ivu-row .ivu-col,.right_col>.ivu-row>.ivu-col{
    margin-top:10px;
}
.address_row .right_col{
    margin-top:35px;
}
.left_col .ivu-row>div:first-child{
    color:#b1b6c9;
}
.password_col input.user_input{
    width:90%;
    max-width:200px;
    border-bottom:none;
    color:#fff;
}
.password_col .ivu-icon{
    color:#787d91;
}
.right_col{
    color:#b1b6c9;
}
.right_col i.change{
    display:inline-block;
    width:21px;
    height: 21px;
    margin-right:20px;
    background:url('../../assets/img/change_icon.png') no-repeat;
}
.right_col label.change_label{
    display:inline-block;
    line-height:28px;
}
.change_label input{
    display:none;
}
.change_label span{
    background:url('../../assets/img/change_square.png') no-repeat;
    display: inline-block;
    height: 16px;
    margin-right: 10px;
    vertical-align: middle;
    width: 15px;
    line-height: 1;
}
.change_label input:checked + span:after{
    content:'';
    display:inline-block;
    height:9px;
    width:9px;
    margin:4px 3px 3px;
    background:url('../../assets/img/change_tick.png') no-repeat;
}
.new_password_row a.user_btn{
    position:absolute;
    right:15px;
    bottom:-50px;
}
.save_col a.user_btn{
    position:absolute;
    right:0px;
    bottom:-40px;
}
.new_password_row a.user_btn span,.save_col a.user_btn span{
    padding:4px 27px;
    font-size:16px;
}
.send_row .ivu-col{
    text-align:right;
}
.send_row a.user_btn{
    /* height:46px; */
    /* position:absolute; */
    right:0px;
    bottom:-34px;
    width:100%;
    max-width:225px;
}
.send_row a.user_btn span{
    padding:4px 30px;
    font-size:16px;
}
.address_row .right_col{
    color:#fff;
}
.blue_star_before:before{
    content:'*';
    color:#14c6d1;
}
.blue_star_after:after{
    content:'*';
    color:#14c6d1;
}
</style>