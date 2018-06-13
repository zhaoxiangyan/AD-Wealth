<template>
    <div class="account">
        <div class="top clearfix">
            <h3>My&nbsp;Account</h3>
            <router-link class="user_btn" to="/user/account">
                 <span>Dashboard</span>
            </router-link>
        </div>
        <div class="user_account">
            <Row class="photo_row" type="flex" justify="center" align="middle">
                <Col span="3">
                   <img src="../../assets/img/photo.png">
                </Col>
                <Col span="21" class="photo_text_col">
                   <p>Change Avatar Image</p>
                   <a href="javascript:void(0)" class="user_btn"><span>Upload new image</span></a>
                </Col>
            </Row>
            <Row class="title_row">
                <Col>Personal information</Col>
            </Row>
            <Row class="personal_row" type="flex" justify="center" align="bottom">
                <Col span="10" class="left_col">
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
                        <Col span="13" class="password_col"><input class="user_input" v-bind:value="password" readonly><Icon type="eye"></Icon></Col>
                    </Row>
                </Col>
                <Col span="14" class="right_col">
                    <Row>
                        <Col span="5"><i class="change"></i>Change</Col>
                        <Col span="6">New Email address:</Col>
                        <Col span="13">
                            <Row class="send_row" :gutter="30">
                                <Col span="12"><input class="user_input"></Col>
                                <a class="user_btn" href="javascript:void(0)"><span>Send verification email</span></a>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="5"><i class="change"></i>Change</Col>
                        <Col span="6">New Password:</Col>
                        <Col span="13">
                            <Row class="new_password_row"  :gutter="30">
                                <Col span="12"><input class="user_input"></Col>
                                <Col span="12"><input class="user_input"></Col>
                                <a class="user_btn" href="javascript:void(0)"><span>Save</span></a>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row class="address_row" type="flex" justify="center" align="bottom">
                <Col span="10" class="left_col">
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
                <Col span="14" class="blue_star_before right_col">
                    Registered address can be changed by sending your latest proof of address to us via Email
                </Col>
            </Row>
            
            <Row class="bank_row">
                <Col span="10" class="left_col">
                    <Row>
                        <Col span="11" class="blue_star_after">Registered banking details:</Col>
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
                <Col span="14" class="right_col">
                    <Row>
                        <Col span="5"><i class="change"></i>Change</Col>
                        <Col span="6">New banking details:</Col>
                        <Col span="13"></Col>
                    </Row>
                    <Row>
                        <Col span="6" offset="5">Bank name:</Col>
                        <Col span="13"><input class="user_input"></Col>
                    </Row>
                    <Row>
                        <Col span="6" offset="5">Bank branch:</Col>
                        <Col span="13"><input class="user_input"></Col>
                    </Row>
                    <Row>
                        <Col span="6" offset="5">Bank account name:</Col>
                        <Col span="13"><input class="user_input"></Col>
                    </Row>
                    <Row>
                        <Col span="6" offset="5">Bank account number:</Col>
                        <Col span="13"><input class="user_input"></Col>
                    </Row>
                    <Row>
                        <Col class="save_col" span="13"  offset="11"><a href="javascript:void(0)" class="user_btn"><span>Save</span></a></Col>
                    </Row>
                </Col>
            </Row>

        </div>
    </div>
</template>
<script>
export default {
    name: 'account',
    data () {
        return {
            password:'1212121212001478'
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
    padding: 75px 100px 120px 100px;
}
.top h3{
    float:left;
    color:#18abd1;
    background-image: linear-gradient(to top, #2470c3, #10d5db);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height:50px;
    font-size:20px;
}
.top a{
    float:right;
    height: 50px;
    padding:1px;
    border-radius:10px;
    width:240px;
}
.top a span{
    display:block;
    width:100%;
    height:48px;
    line-height:48px;
    border-radius:10px;
    font-size:20px;
}
.user_account{
    font-size:22px;
}
.user_account>div{
    padding-bottom:35px;
}
.photo_row{
    margin-top:30px;
}
.photo_text_col{
    padding-left:40px;
}
.photo_row div img{
    max-width:210px;
    width:100%;
    border:1px solid #fff;
    border-radius:27px;
    box-shadow:5px 10px 10px #2c344f;
}
.photo_row div p{
    font-size:20px;
    margin:5px 0px 16px;
}
.photo_row div a{
    width:190px;
    height:48px;
}
.photo_row div span{
    line-height:46px;
    font-size:16px;
}
.title_row div{
    font-size:40px;
    margin-top:25px;
}
.personal_row{}
.left_col .ivu-row,.right_col>.ivu-row{
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
.new_password_row a.user_btn,.save_col a.user_btn{
    position:absolute;
    right:0px;
    bottom:-60px;
    height:46px;
}
.save_col a.user_btn{
    bottom:-33px;
}
.new_password_row a.user_btn span,.save_col a.user_btn span{
    padding:0px 40px;
    line-height:44px;
    font-size:16px;
}
.send_row a.user_btn{
    /* height:46px; */
    position:absolute;
    right:0px;
    bottom:0px;
}
.send_row a.user_btn span{
    padding:0px 30px;
    line-height:44px;
    font-size:16px;
}
.address_row .right_col{
    color:#fff;
}
</style>