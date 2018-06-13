import { Doughnut } from '../chart/basecharts'
export default {
  extends: Doughnut,
  props: ['datas', 'options'],
  // Overwriting base render method with actual data.
  mounted () { this.renderChart(this.datas, this.options) }
}
