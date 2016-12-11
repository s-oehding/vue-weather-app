<template>
  <div id="app">
    <div id="app-wrapper" v-if="ready">
      <div class="map-wrapper">
        <gmap v-if="ready" :api-key="gmapKey" :location.sync="location" :address.sync="address" :newAddress.sync="newAddress" :zoom.sync="zoom" :reset.sync="reset" v-on:locationUpdate="locationUpdate" v-on:addressUpdate="addressUpdate"></gmap>
      </div>
      <div class="controls-wrapper">
        <navbar @getGeolocation="getGeolocation" @resetMap="resetMap">
          <div slot="inputs">
            <label>Get Geolocation</label>
            <button class="btn" @click="getGeolocation()">Get my Position</button>
            <label>Reset map to marker</label>
            <button class="btn" @click="resetMap()">Center Map</button>
            <label>lat</label>
            <input type="number" step="any" name="lat" class="form-control" v-model.lazy="location.lat" placeholder="latitude">
            <label>lng</label>
            <input type="number" step="any" name="lng" class="form-control" v-model.lazy="location.lng" placeholder="longitude">
            <label>Search by address</label>
            <input type="text" name="address" class="form-control" v-model.lazy="newAddress" placeholder="Hamburg DE">
          </div>
        </navbar>
      </div>
      <div class="sidebar-wrapper">
        <!-- <open-weather v-if="ready" :lat="location.lat" :lng="location.lng"></open-weather> -->
        <dark-sky v-if="address[1]" :address.sync="address" :lat="location.lat" :lng="location.lng"></dark-sky>
      </div>
    </div>
    <div id="preloader" v-else>
      <div class="preloader"></div>
    </div>
  </div>
</template>

<script>
// import OpenWeather from './components/OpenWeather'
import DarkSky from './components/DarkSky'
import Gmap from './components/Gmap'
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    DarkSky, Gmap, Navbar
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
      ready: false,
      reset: false
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
          console.log('GEOLOCATION', position.coords)
          this.ready = true
        }.bind(this))
      }
    },
    resetMap () {
      this.reset = true
      this.$nextTick(function () {
        this.reset = false
      })
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
