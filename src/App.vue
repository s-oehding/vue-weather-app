<template>
  <div id="app-wrapper">
    <div v-if="ready">
      <navbar @getGeolocation="getGeolocation" @resetMap="resetMap">
        <div slot="inputs">
          <form class="form-inline my-2 my-lg-0">
            <label class="mr-sm-2">lat</label>
            <input type="number" step="any" name="lat" class="form-control mr-sm-2" v-model.lazy="location.lat" placeholder="latitude">
            <label class="mr-sm-2">lng</label>
            <input type="number" step="any" name="lng" class="form-control mr-sm-2" v-model.lazy="location.lng" placeholder="longitude">
            <label class="mr-sm-2">Search by address</label>
            <input type="text" name="address" class="form-control mr-sm-2" v-model.lazy="newAddress" placeholder="Hamburg DE">
          </form>
        </div>
        <div slot="buttons">
          <form class="form-inline my-2 my-lg-0">
            <label class="mr-sm-2">Get Geolocation</label>
            <button class="btn btn-outline-success mr-sm-2" @click="getGeolocation()">Get my Position</button>
            <label class="mr-sm-2">Reset map to marker</label>
            <button class="btn btn-outline-warning mr-sm-2" @click="resetMap()">Center Map</button>
          </form>
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
    </div>
    <div id="preloader" v-else>
      <div class="preloader"></div>
    </div>
  </div>
</template>

<script>
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
      if (navigator.geolocation) {
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
