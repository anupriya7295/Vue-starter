<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
    <button v-on:click="fillData()">Randomize</button>
    <bar :chart-data="datacollection1"></bar>
  </div>
</template>

<script>
  import LineChart from './LineChart.js'
  import Bar from './LineChart.js'

  export default {
    name: 'Chart',
    components: {
      LineChart,
      Bar
    },
    data () {
      return {
        datacollection: null
      }
    },
    mounted () {
      this.fillData();
      this.datacollection1 = {
      labels: ['X Axis Label 1', 'X Axis Label 2'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 20, 12]
        }
      ]
    };   
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: ['one','two','three','four'],
          datasets: [
            {
              label: 'jan',
              backgroundColor: 'red',
              data: [12,4,2,10]
            }, {
              label: 'feb',
              backgroundColor: '#f87979',
              data:[1,12,7,2]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>