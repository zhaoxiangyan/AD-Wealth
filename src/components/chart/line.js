import { Line } from '../chart/basecharts'
export default {
  extends: Line,
  props: ['datas', 'options'],
  // Overwriting base render method with actual data.
  mounted () {
    // var gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    // gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)')
    // gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)')
    // gradient.addColorStop(1, 'rgba(255, 0, 0, 0)')
    this.renderChart(this.datas, this.options)
  }
}
