<template>
    <div class="one">
        <Row>
            <Col span="12">
               <doughnut></doughnut>
            </Col>
            <Col span="11" offset="1">
                <Row>
                    <Col>
                        <Row>
                            <Col span="9">
                               <p>Equity Fund</p>
                               <p>YTD(Daily)<span>+5.28%</span></p>
                            </Col>
                            <Col span="9">
                               <p>1.Equity Fund</p>
                               <p>2.Equity Fund</p>
                               <p>3.Equity Fund</p>
                               <p>4.Equity Fund</p>
                            </Col>
                            <Col span="6">
                               <linechart></linechart>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col span="9">
                               <p>Equity Fund</p>
                               <p>YTD(Daily)<span>+5.28%</span></p>
                            </Col>
                            <Col span="9">
                               <p>1.Equity Fund</p>
                               <p>2.Equity Fund</p>
                               <p>3.Equity Fund</p>
                               <p>4.Equity Fund</p>
                            </Col>
                            <Col span="6">
                               <linechart></linechart>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col span="9">
                               <p>Equity Fund</p>
                               <p>YTD(Daily)<span>+5.28%</span></p>
                            </Col>
                            <Col span="9">
                               <p>1.Equity Fund</p>
                               <p>2.Equity Fund</p>
                               <p>3.Equity Fund</p>
                               <p>4.Equity Fund</p>
                            </Col>
                            <Col span="6">
                               <linechart></linechart>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col span="9">
                               <p>Equity Fund</p>
                               <p>YTD(Daily)<span>+5.28%</span></p>
                            </Col>
                            <Col span="9">
                               <p>1.Equity Fund</p>
                               <p>2.Equity Fund</p>
                               <p>3.Equity Fund</p>
                               <p>4.Equity Fund</p>
                            </Col>
                            <Col span="6">
                               <linechart></linechart>
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
export default {
    name: 'one',
    data () {
      return {}
    },
    components: {
        Doughnut,Linechart
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
</style>