import { Doughnut } from '../chart/basecharts'
export default {
  extends: Doughnut,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Equity Fund', 'Balanced Fund', 'Stable Fund', 'Money Market Fund'],
      datasets: [
        {
          backgroundColor: ['#00aded', '#3b5998', '#7164c1', '#a89de8'],
          borderWidth: 0,
          hoverBackgroundColor: ['#00aded', '#3b5998', '#7164c1', '#a89de8'],
          data: [112, 80, 80, 120]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
