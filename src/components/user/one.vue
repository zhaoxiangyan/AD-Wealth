<template>
    <div class="one">
        <userMenu></userMenu>
        <Row>
            <Col span="12" class="ring_col">
               <h3>Portfolio</h3>
               <doughnut :datas="doughnut_data" :height="740" :options="doughnut_options"></doughnut>
            </Col>
            <Col span="11" offset="1">
                <Row class="fund_row">
                    <h3>ADW Unit Trust</h3>
                    <Col class="fund_col">
                        <Row>
                            <Col span="9" class="_left">
                               <p>Equity Fund</p>
                               <p>YTD(Daily)<span>+5.28%</span></p>
                            </Col>
                            <Col span="9" class="_middle">
                               <p>1&nbsp;Yr&nbsp;+8.25%</p>
                               <p>3&nbsp;Yrs&nbsp;+10.10%</p>
                               <p>5&nbsp;Yrs</p>
                               <p>10&nbsp;Yrs</p>
                            </Col>
                            <Col span="6" class="_right">
                               <linechart :datas="line1_data" :height="150" :width="150" :options="line_options"></linechart>
                            </Col>
                        </Row>
                    </Col>
                    <Col class="fund_col">
                        <Row>
                            <Col span="9" class="_left">
                               <p>Balanced Fund</p>
                               <p>YTD(Daily)<span>+5.28%</span></p>
                            </Col>
                            <Col span="9" class="_middle">
                               <p>1&nbsp;Yr&nbsp;+8.25%</p>
                               <p>3&nbsp;Yrs&nbsp;+10.10%</p>
                               <p>5&nbsp;Yrs</p>
                               <p>10&nbsp;Yrs</p>
                            </Col>
                            <Col span="6" class="_right">
                               <linechart :datas="line2_data"  :height="150" :width="150" :options="line_options"></linechart>
                            </Col>
                        </Row>
                    </Col>
                    <Col class="fund_col">
                        <Row>
                            <Col span="9" class="_left">
                               <p>Stable Fund</p>
                               <p>YTD(Daily)<span>+5.28%</span></p>
                            </Col>
                            <Col span="9" class="_middle">
                               <p>1&nbsp;Yr&nbsp;+8.25%</p>
                               <p>3&nbsp;Yrs&nbsp;+10.10%</p>
                               <p>5&nbsp;Yrs</p>
                               <p>10&nbsp;Yrs</p>
                            </Col>
                            <Col span="6" class="_right">
                               <linechart  :datas="line3_data"  :height="150" :width="150" :options="line_options"></linechart>
                            </Col>
                        </Row>
                    </Col>
                    <Col class="fund_col">
                        <Row>
                            <Col span="9" class="_left">
                               <p>Money Market Fund</p>
                               <p>YTD(Daily)<span>+5.28%</span></p>
                            </Col>
                            <Col span="9" class="_middle">
                               <p>1&nbsp;Yr&nbsp;+8.25%</p>
                               <p>3&nbsp;Yrs&nbsp;+10.10%</p>
                               <p>5&nbsp;Yrs</p>
                               <p>10&nbsp;Yrs</p>
                            </Col>
                            <Col span="6" class="_right">
                               <linechart :datas="line4_data"  :height="150" :width="150" :options="line_options"></linechart>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
</template>
<script>
import Doughnut from '../chart/doughnut'
import Linechart from '../chart/line'
import userMenu from '../user/menu.vue'
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
                cutoutPercentage:60
            },
            // 折线数据配置
            line1_data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                    label: 'Equity Fund',
                    borderColor: '#f87979',
                    pointRadius: 0,
                    data: [40, 39, 10, 40, 39, 80, 40]
                    }
                ]
            },
            line2_data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                    label: 'Balanced Fund',
                    // backgroundColor: '#f87979',
                    borderColor: '#f87979',
                    pointRadius: 0,
                    data: [40, 39, 10, 40, 39, 80, 40]
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
                    data: [40, 39, 10, 40, 39, 80, 40]
                    }
                ]
            },
            line_options: {
                responsive: false,
                maintainAspectRatio: false,
                legend: {
                    display:false
                },
                cutoutPercentage:60
            }
      }
    },
    components: {
        Doughnut,Linechart,userMenu
    }
}
</script>
<style scoped>
.one{
    width:100%;
    padding:75px 100px 0px 100px;
    background:#3d4669;
    color:#fff;
}
.ring_col h3{
    position:absolute;
    font-size:40px;
    line-height:1.1;
}
.fund_row{}
.fund_row h3{
  font-size:40px;
  color:#fff;
  font-weight:normal;
  position: absolute;
  width:100%;
  margin-bottom:40px;
  top:-100px;
}
.fund_row .fund_col{
  border-radius: 20px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1),inset 0px 1px 0px 0px rgba(255, 255, 255, 0.15);
  background:#4a5376;
  background: linear-gradient(to right,#5a6383, #3e476b);
  margin-bottom:44px;
}
.fund_col .ivu-row{
    height:150px;
    padding:24px 35px;
}
.fund_col .ivu-row{
    text-align:left;
}
.fund_col .ivu-row ._left p:first-child{
    font-size:24px;
    color:#fff;
    margin-bottom:20px;
}
.fund_col .ivu-row ._left p{
    font-size:20px;
    color:#c9d0e3;
}
.fund_col .ivu-row ._left p span{
    display:inline-block;
    margin-left:10px;
}
.fund_col .ivu-row ._middle p{
    font-size:18px;
    line-height:1.4;
    color:#939cb6;
}
.fund_col .ivu-row ._right{
    height:100%;
    overflow:hidden;
}
</style>