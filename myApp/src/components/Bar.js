import { Bar } from 'vue-chartjs'
export default Bar.extend({
  props: ['labels', 'datasets'],
  computed: {
    'chartdata': function () {
      return {
        labels: this.labels,
        datasets: this.datasets
      }
    }
  },
 mounted () {
    this.renderChart(this.chartdata, 
    {responsive: true, maintainAspectRatio: false})
  }
})