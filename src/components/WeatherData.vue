<template>
  <local-weather v-if="ready" :forecast="forecast"></local-weather>
  <div v-else class="preloader">
    <div class="dot-loader"></div>
  </div>
</template>

<script>
  import LocalWeather from './WeatherData/LocalWeather'
  export default {
    name: 'weather-data',
    components: {
      LocalWeather
    },
    props: ['lat', 'lng'],
    data () {
      return {
        forecast: {},
        apiUrl: 'http://api.openweathermap.org/data/2.5/weather',
        apiKey: '0ae1ca667483d87c5e91da944d267f9e',
        ready: false
      }
    },
    mounted () {
      this.getForecast()
    },
    methods: {
      getForecast () {
        this.$http.get(this.apiUrl + '?lat=' + this.lat + '&lon=' + this.lng + '&appid=' + this.apiKey + '&units=metric').then(function (data) {
          this.forecast = data.body
          this.ready = true
        }, function (error) {
          console.log(error)
          this.ready = false
        })
      }
    },
    watch: {
      lat: {
        handler: function (val, oldVal) {
          this.getForecast()
        }
      },
      lng: {
        handler: function (val, oldVal) {
          this.getForecast()
        }
      }
    }
  }
</script>