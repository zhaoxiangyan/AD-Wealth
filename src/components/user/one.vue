<template>
    <div class="one">
        <div class="one_box">
            <userMenu @up="changeTab" :tabNum="tabnum"></userMenu>
            <Row>
                <Col :md="24" :lg="12" class="ring_col">
                <h3>Portfolio</h3>
                <doughnut :datas="doughnut_data" :height="520" :options="doughnut_options"></doughnut>
                <canvas id="canvas_circle" width="500" height="300" style="border:2px solid #0026ff;display:none;" >浏览器不支持canvas</canvas>  
                </Col>
                <Col :md="24" :lg="{span:11,offset:1}" >
                    <Row v-if="tabnum == 3" class="fund_row" >
                        <h3>ADW Unit Trust</h3>
                        <Col class="fund_col">
                            <Row>
                                <Col span="10" class="_left">
                                <p>Equity Fund</p>
                                <p>YTD(Daily)<span>+5.28%</span></p>
                                </Col>
                                <Col span="8" class="_middle">
                                <p>1&nbsp;Yr&nbsp;+8.25%</p>
                                <p>3&nbsp;Yrs&nbsp;+10.10%</p>
                                <p>5&nbsp;Yrs</p>
                                <p>10&nbsp;Yrs</p>
                                </Col>
                                <Col span="6" class="_right">
                                <linechart :datas="line1_data" :height="100" :width="150" :options="line_options"></linechart>
                                </Col>
                            </Row>
                        </Col>
                        <Col class="fund_col">
                            <Row>
                                <Col span="10" class="_left">
                                <p>Balanced Fund</p>
                                <p>YTD(Daily)<span>+5.28%</span></p>
                                </Col>
                                <Col span="8" class="_middle">
                                <p>1&nbsp;Yr&nbsp;+8.25%</p>
                                <p>3&nbsp;Yrs&nbsp;+10.10%</p>
                                <p>5&nbsp;Yrs</p>
                                <p>10&nbsp;Yrs</p>
                                </Col>
                                <Col span="6" class="_right">
                                <linechart :datas="line2_data"  :height="100" :width="150"  :options="line_options"></linechart>
                                </Col>
                            </Row>
                        </Col>
                        <Col class="fund_col">
                            <Row>
                                <Col span="10" class="_left">
                                <p>Stable Fund</p>
                                <p>YTD(Daily)<span>+5.28%</span></p>
                                </Col>
                                <Col span="8" class="_middle">
                                <p>1&nbsp;Yr&nbsp;+8.25%</p>
                                <p>3&nbsp;Yrs&nbsp;+10.10%</p>
                                <p>5&nbsp;Yrs</p>
                                <p>10&nbsp;Yrs</p>
                                </Col>
                                <Col span="6" class="_right">
                                <linechart  :datas="line3_data"  :height="100" :width="150" :options="line_options"></linechart>
                                </Col>
                            </Row>
                        </Col>
                        <Col class="fund_col">
                            <Row>
                                <Col span="10" class="_left">
                                <p>Money Market Fund</p>
                                <p>YTD(Daily)<span>+5.28%</span></p>
                                </Col>
                                <Col span="8" class="_middle">
                                <p>1&nbsp;Yr&nbsp;+8.25%</p>
                                <p>3&nbsp;Yrs&nbsp;+10.10%</p>
                                <p>5&nbsp;Yrs</p>
                                <p>10&nbsp;Yrs</p>
                                </Col>
                                <Col span="6" class="_right">
                                <linechart :datas="line4_data"  :height="100" :width="150" :options="line_options"></linechart>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row v-else-if="tabnum == 2">22222</Row>
                    <Row v-else-if="tabnum == 1" class="account_row">
                        <div>
                            <p>Net Gain/Loss</p>
                            <em>USD</em>
                            <ICountUp
                            :startVal="startVal1"
                            :endVal="endVal1"
                            :decimals="decimals1"
                            :duration="duration1"
                            :options="options1"
                            @ready="onReady"
                            />
                        </div>
                        <div>
                            <p>Net Annualized Return</p>
                            <em></em>
                            <ICountUp
                            :startVal="startVal2"
                            :endVal="endVal2"
                            :decimals="decimals2"
                            :duration="duration2"
                            :options="options2"
                            @ready="onReady"
                            />
                        </div>
                        <div>
                            <p>Available Cash</p>
                            <em>USD</em>
                            <ICountUp
                            :startVal="startVal3"
                            :endVal="endVal3"
                            :decimals="decimals3"
                            :duration="duration3"
                            :options="options3"
                            @ready="onReady"
                            />
                        </div>
                        <div>
                            <p>Portfolio Value</p>
                            <em>USD</em>
                            <ICountUp
                            :startVal="startVal4"
                            :endVal="endVal4"
                            :decimals="decimals4"
                            :duration="duration4"
                            :options="options4"
                            @ready="onReady"
                            />
                        </div>
                    </Row>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
import Doughnut from '../chart/doughnut'
import Linechart from '../chart/line'
import userMenu from '../user/menu'
import ICountUp from 'vue-countup-v2'
export default {
    name: 'one',
    data () {
      return {
            // 圆环数据配置
            doughnut_data: {
                labels: ['Equity Fund', 'Balanced Fund', 'Stable Fund', 'Money Market Fund'],
                datasets: [
                    {
                    backgroundColor: ['#00aded', '#3b5998', '#7164c1', '#a89de8'],
                    borderWidth: 0,
                    hoverBackgroundColor: ['#00aded', '#3b5998', '#7164c1', '#a89de8'],
                    data: [112, 80, 80, 120]
                    }
                ]
            },
            doughnut_options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'bottom',
                    labels: {
                    fontSize: 16,
                    fontColor: '#fff',
                    boxWidth: 20,
                    padding: 40
                    }
                },
                cutoutPercentage:0
            },
            // 折线数据配置
            line1_data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                    label: 'Equity Fund',
                    borderColor: '#3ac45d',
                    pointRadius: 0,
                    data: [40, 39, 10, 40, 39, 80, 85]
                    }
                ]
            },
            line2_data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                    label: 'Balanced Fund',
                    // backgroundColor: '#f87979',
                    borderColor: '#3ac45d',
                    pointRadius: 0,
                    data: [40, 39, 10, 40, 39, 80, 90]
                    }
                ]
            },
            line3_data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                    label: 'Stable Fund',
                    // backgroundColor: '#c55eb5',
                    borderColor: '#c55eb5',
                    pointRadius: 0,
                    data: [40, 39, 10, 40, 39, 80, 40]
                    }
                ]
            },
            line4_data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                    label: 'Money Market Fund',
                    // backgroundColor: '#3ac45d',
                    borderColor: '#3ac45d',
                    pointRadius: 0,
                    data: [40, 39, 10, 40, 39, 60, 80]
                    }
                ]
            },
            line_options: {
                responsive: false,
                maintainAspectRatio: false,
                scales: {
                    // yAxes: [{
                    //     ticks: {
                    //         callback: function(value, index, values) {
                    //             return ;
                    //         }
                    //     }
                    // }],
                    xAxes: [{
                        ticks: {
                            // Include a dollar sign in the ticks
                            // 如果回调返回null或undefined关联的网格线将被隐藏。
                            callback: function(value, index, values) {
                                return ;
                            }
                        }
                    }]
                },
                legend: {
                    display:false
                },
                cutoutPercentage:60
            },
            // 右侧tab选项卡
            tabnum:3,
            // 渐变数字
            startVal1: 0,
            endVal1: 2132.25,
            decimals1: 2,
            duration1: 2.5,
            options1: {
                useEasing: true,
                useGrouping: true,
                separator: ',',
                decimal: '.',
                prefix: '',
                suffix: ''
            },
            startVal2: 0,
            endVal2: 14.35,
            decimals2: 2,
            duration2: 2.5,
            options2: {
                useEasing: true,
                useGrouping: true,
                separator: ',',
                decimal: '.',
                prefix: '',
                suffix: '%'
            },
            startVal3: 0,
            endVal3: 0.00,
            decimals3: 2,
            duration3: 2.5,
            options3: {
                useEasing: true,
                useGrouping: true,
                separator: ',',
                decimal: '.',
                prefix: '',
                suffix: ''
            },
            startVal4: 0,
            endVal4: 202132.25  ,
            decimals4: 2,
            duration4: 2.5,
            options4: {
                useEasing: true,
                useGrouping: true,
                separator: ',',
                decimal: '.',
                prefix: '',
                suffix: ''
            }
      }
    },
    components: {
        Doughnut,Linechart,userMenu,ICountUp
    },
    mounted() {
        var self = this;
        //绘制饼图  
        //比例数据和颜色  
        var data_arr = [0.1,0.3,0.4,0.2];
        var color_arr = ["#00FF21", "#FFAA00", "#00AABB", "#FF4400"];  
        var text_arr = ["第一季度", "第二季度", "第三季度", "第四季度"];
        self.drawCircle("canvas_circle", data_arr, color_arr, text_arr);  
    },
    methods: {
        // tab切换  父子组件通信
        changeTab(e){
            this.tabnum = e;
        },
        // 渐变数字
        onReady: function(instance, CountUp) {
            const that = this;
            instance.start();
        },
        drawCircle(canvasId, data_arr, color_arr, text_arr){
              var c = document.getElementById(canvasId);  
                var ctx = c.getContext("2d");  
  
                var radius = c.height / 2 - 20; //半径  
                var ox = radius + 20, oy = radius + 20; //圆心  
  
                var width = 30, height = 10; //图例宽和高  
                var posX = ox * 2 + 20, posY = 30;   //  
                var textX = posX + width + 5, textY = posY + 10;  
  
                var startAngle = 0; //起始弧度  
                var endAngle = 0;   //结束弧度  
                for (var i = 0; i < data_arr.length; i++)  
                {  
                    //绘制饼图  
                    endAngle = endAngle + data_arr[i] * Math.PI * 2; //结束弧度  
                    ctx.fillStyle = color_arr[i];  
                    ctx.beginPath();  
                    ctx.moveTo(ox, oy); //移动到到圆心  
                    ctx.arc(ox, oy, radius, startAngle, endAngle, false);  
                    ctx.closePath();  
                    ctx.fill();  
                    startAngle = endAngle; //设置起始弧度  
  
                    //绘制比例图及文字  
                    ctx.fillStyle = color_arr[i];  
                    ctx.fillRect(posX, posY + 20 * i, width, height);  
                    ctx.moveTo(posX, posY + 20 * i);  
                    ctx.font = 'bold 12px 微软雅黑';    //斜体 30像素 微软雅黑字体  
                    ctx.fillStyle = color_arr[i]; //"#000000";  
                    var percent = text_arr[i] + "：" + 100 * data_arr[i] + "%";  
                    ctx.fillText(percent, textX, textY + 20 * i);  
                }  
        }
    }
}
</script>
<style scoped>
.one{
    width:100%;
    /* padding:40px 100px 0px 100px; */
    background:#3d4669;
    color:#fff;
}
.one_box{
    padding-top: 30px;
    width: 100%;
    max-width: 1520px;
    margin: 0 auto;
}
.ring_col h3{
    position:absolute;
    font-size:35px;
    line-height:1.1;
    top:70px;
    font-weight:normal;
}
/* tab1 */
.account_row{
    top:-100px;
}
.account_row div{
    float:right;
    width:300px;
    height:300px;
    margin:0px 0px 20px 20px;
    border-radius: 20px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1),inset 0px 1px 0px 0px rgba(255, 255, 255, 0.15);
    background:#4a5375;
    background: linear-gradient(to left,#3f486c, #586181);
}
.account_row div p{
    font-size:25px;
    margin:43px 0px 27px;
}
.account_row div em{
    display:block;
    height:34px;
    font-size:23px;
    font-style:normal;
    color: #18abd1;
    background-image: linear-gradient(to top, #2471c3, #10d5db);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align:left;
    padding-left:24px;
}
.account_row div span{
    display:block;
    font-size:53px;
    line-height:1.15;
}
/* tab2 */
/* tab3 */
.fund_row{
    top:-150px;
}
.fund_row h3{
  font-size:30px;
  color:#fff;
  font-weight:normal;
  /* position: absolute; */
  width:100%;
  margin-bottom:30px;
  /* top:-100px; */
}
.fund_row .fund_col{
  border-radius: 20px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1),inset 0px 1px 0px 0px rgba(255, 255, 255, 0.15);
  background:#4a5376;
  background: linear-gradient(to right,#5a6383, #3e476b);
  margin-bottom:24px;
}
.fund_col .ivu-row{
    height:125px;
    padding:22px 35px;
}
.fund_col .ivu-row{
    text-align:left;
}
.fund_col .ivu-row ._left p:first-child{
    font-size:25px;
    color:#fff;
    margin-bottom:20px;
}
.fund_col .ivu-row ._left p{
    font-size:16px;
    color:#c9d0e3;
}
.fund_col .ivu-row ._left p span{
    display:inline-block;
    margin-left:10px;
}
.fund_col .ivu-row ._middle p{
    font-size:16px;
    line-height:1.4;
    color:#939cb6;
}
.fund_col .ivu-row ._right{
    height:100%;
    overflow:hidden;
}
@media screen and (max-width:1199px){
    .fund_row h3{
        position:static;
        margin-top:35px;
    }
}
@media screen and (max-width:850px){
    .one{
        padding:35px;
    }
}
</style>