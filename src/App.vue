<template>
  <div id="app">
    <div class="map-wrapper">
      <gmap v-if="ready" :api-key="gmapKey" :location.sync="location" :address.sync="address" :newAddress.sync="newAddress" :zoom.sync="zoom" v-on:locationUpdate="locationUpdate" v-on:addressUpdate="addressUpdate" v-on:resetMap="resetMap()"></gmap>
    </div>
    <div class="controls-wrapper">
      <nav class="navbar row">
        <div class="col-2">
          <label for="lat">Latitude</label>
          <input type="number" name="lat" class="form-input" v-model.lazy="location.lat" placeholder="latitude">
        </div>
        <div class="col-2">
          <label for="lng">Longitude</label>
          <input type="number" name="lng" class="form-input" v-model.lazy="location.lng" placeholder="longitude">
        </div>
        <div class="col-2">
          <label for="geolocation">Geolocation</label>
          <a class="btn" v-on:click="getGeolocation()">Get my Position</a>
        </div>
        <div class="col-2">
          <label for="address">Geocode Address</label>
          <input type="text" name="address" class="form-input" v-model.lazy="newAddress" placeholder="Hamburg DE">
        </div>
        <div class="col-2">
          <label for="zoom">Zoom</label>
          <input v-model="zoom" class="form-input" type="range" id="zoom" min="3" max="18" step="1">
        </div> 
        <div class="col-2">
          <label for="lng">Reset to Marker</label>
          <a class="btn" v-on:click="resetMap()">Center Map</a>
        </div> 
      </nav>
    </div>
    <div class="sidebar-wrapper">
      <!-- <open-weather v-if="ready" :lat="location.lat" :lng="location.lng"></open-weather> -->
      <dark-sky v-if="address[1]" :address.sync="address" :lat="location.lat" :lng="location.lng"></dark-sky>
    </div>
  </div>
</template>

<script>
// import OpenWeather from './components/OpenWeather'
import DarkSky from './components/DarkSky'
import Gmap from './components/Gmap'

// import WeatherMap from './components/WeatherMap'

export default {
  name: 'app',
  components: {
    DarkSky, Gmap
  },
  data () {
    return {
      gmapKey: 'AIzaSyCZtDHCa5264C_wus713s_is44ACsEtqmY',
      location: {
        lat: null,
        lng: null
      },
      address: {},
      newAddress: '',
      zoom: 10,
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
    setReady () {
      this.ready = true
    },
    resetMap () {
      this.$emit('resetMap')
    },
    locationUpdate (newLocation) {
      // console.log('NewLocation', location)
      this.location = newLocation
    },
    addressUpdate (address) {
      // console.log('NewAddress', address)
      this.address = address
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/app.scss'
</style>
