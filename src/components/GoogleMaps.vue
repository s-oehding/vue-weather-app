<template>
<div class="map-wrapper">
  <map-canvas :api-key="gmapKey" :lat.sync="lat" :lng.sync="lng" :zoom.sync="zoom" v-on:resetMap="resetMap()"></map-canvas>
  <geo-coder v-on:locationUpdate="setLocation()" :api-key="gmapKey" :lat.sync="lat" :lng.sync="lng" :address.sync="address"></geo-coder>
</div>
<!--   <div>
    <div class="controls-wrapper">
      <nav class="navbar row">
        <div class="col-2">
          <label for="lat">Latitude</label>
          <input type="text" name="lat" class="form-input" v-model.lazy="lat" placeholder="latitude">
        </div>
        <div class="col-2">
          <label for="lng">Longitude</label>
          <input type="text" name="lng" class="form-input" v-model.lazy="lng" placeholder="longitude">
        </div>
        <div class="col-2">
          <label for="geolocation">Geolocation</label>
          <a class="btn" v-on:click="getGeolocation()">Get my Position</a>
        </div>
        <div class="col-2">
          <label for="address">Geocode Address</label>
          <input type="text" name="address" class="form-input" v-model.lazy="address">
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
  </div> -->
</template>

<script>
import MapCanvas from './GoogleMaps/MapCanvas'
import GeoCoder from './GoogleMaps/GeoCoder'

export default {
  name: 'google-maps',
  components: {
    MapCanvas, GeoCoder
  },
  props: ['lat', 'lng', 'address'],
  data () {
    return {
      gmapKey: 'AIzaSyCZtDHCa5264C_wus713s_is44ACsEtqmY',
      zoom: 10
    }
  },
  methods: {
    setLocation (location) {
      console.log('location', location)
    }
  }
}
</script>
