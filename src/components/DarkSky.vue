<template>
  <local-weather v-if="ready" :address.sync="address" :forecast="forecast"></local-weather>
  <div v-else class="preloader">
    <div class="dot-loader"></div>
  </div>
</template>

<script>
  import LocalWeather from './DarkSky/LocalWeather'
  export default {
    name: 'dark-sky',
    components: {
      LocalWeather
    },
    props: ['address', 'lat', 'lng'],
    data () {
      return {
        forecast: {},
        apiUrl: 'https://api.darksky.net/forecast/',
        apiKey: '0dd6813c8cbc198e1b52ec974f1caeea',
        ready: false
      }
    },
    mounted () {
      this.getForecast()
    },
    methods: {
      getForecast () {
        this.$http.jsonp(this.apiUrl + this.apiKey + '/' + this.lat + ',' + this.lng + '?units=auto&lang=de').then(function (data) {
          this.forecast = data.body
          this.ready = true
        }, function (error) {
          console.log(error)
          this.ready = false
        }.bind(this))
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