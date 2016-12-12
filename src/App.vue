<template>
  <div id="app-wrapper">
    <div v-if="ready">
      <navbar @getGeolocation="getGeolocation" @resetMap="resetMap">
        <div slot="inputs">
          <fieldset class="form-group">
          <label>lat</label>
          <input type="number" step="any" name="lat" class="form-control" v-model.lazy="location.lat" placeholder="latitude">
          </fieldset>
          <fieldset class="form-group">
          <label>lng</label>
          <input type="number" step="any" name="lng" class="form-control" v-model.lazy="location.lng" placeholder="longitude">
          </fieldset>
          <fieldset class="form-group">
          <label>Search by address</label>
          <input type="text" name="address" class="form-control" v-model.lazy="newAddress" placeholder="Hamburg DE">
          </fieldset>
        </div>
        <div slot="buttons">
          <fieldset class="form-group">
            <label>Get Geolocation</label>
            <button class="btn btn-outline-success" @click="getGeolocation()">Get my Position</button>
          </fieldset>
          <fieldset class="form-group">
            <label>Reset map to marker</label>
            <button class="btn btn-outline-warning" @click="resetMap()">Center Map</button>
          </fieldset>
        </div>
      </navbar>
      <!-- Begin page content -->
      <div class="container-fluid no-pad">
        <div class="col-sm-12 col-md-8 col-lg-9 map-wrapper no-pad">
          <gmap v-if="ready" :api-key="gmapKey" :location.sync="location" :address.sync="address" :newAddress.sync="newAddress" :zoom.sync="zoom" :reset.sync="reset" v-on:locationUpdate="locationUpdate" v-on:addressUpdate="addressUpdate"></gmap>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-3 sidebar-wrapper">
          <!-- <open-weather v-if="ready" :lat="location.lat" :lng="location.lng"></open-weather> -->
          <dark-sky v-if="address[1]" :address.sync="address" :lat="location.lat" :lng="location.lng"></dark-sky>
        </div>
      </div>

      <!-- <footer class="footer">
        <div class="container">
          <span class="text-muted">Place sticky footer content here.</span>
        </div>
      </footer> -->
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
