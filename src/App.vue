<template>
  <div id="app">
    <google-maps v-on:addressUpdate="setAddress()" v-on:locationUpdate="setLocation()" v-if="ready" :address.sync="address" :lat.sync="location.lat" :lng.sync="location.lng"></google-maps>
    <div class="sidebar-wrapper">
      <!-- <open-weather v-if="ready" :lat="location.lat" :lng="location.lng"></open-weather> -->
      <dark-sky v-if="ready" :address.sync="address" :lat="location.lat" :lng="location.lng"></dark-sky>
    </div>
  </div>
</template>

<script>
// import OpenWeather from './components/OpenWeather'
import DarkSky from './components/DarkSky'
import GoogleMaps from './components/GoogleMaps'

// import WeatherMap from './components/WeatherMap'

export default {
  name: 'app',
  components: {
    DarkSky, GoogleMaps
  },
  data () {
    return {
      location: {
        lat: null,
        lng: null
      },
      address: [],
      ready: false
    }
  },
  mounted () {
    this.getGeolocation()
  },
  methods: {
    getGeolocation () {
      if ('geolocation' in navigator) {
        var gl = navigator.geolocation
        gl.getCurrentPosition(function (position) {
          this.location.lng = position.coords.longitude
          this.location.lat = position.coords.latitude
          // console.log('GEOLOCATION', position.coords)
          this.ready = true
        }.bind(this))
      }
    },
    setAddress (address) {
      console.log('Address', address)
    },
    setLocation (location) {
      console.log('location', location)
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/app.scss'
</style>
