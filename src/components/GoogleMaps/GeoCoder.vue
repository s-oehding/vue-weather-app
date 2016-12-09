<template>
  <div id="map"></div>
</template>

<script>
import GoogleMapsLoader from 'google-maps'
export default {
  name: 'geo-coder',
  props: ['apiKey', 'lat', 'lng', 'address'],
  mounted () {
    this.init()
  },
  methods: {
    init () {
      // console.log('Mounted GMAP ', this.apiKey, this.lat, this.lng, this)
      GoogleMapsLoader.KEY = this.apiKey
      GoogleMapsLoader.load((google) => {
        // var location = { lat: parseFloat(this.lat), lng: parseFloat(this.lng) }
        this.geocoder = new google.maps.Geocoder()
        this.geocodeCoords()
      })
    },
    geocodeAddress () {
      this.geocoder.geocode({'address': this.address}, function (results, status) {
        if (status === 'OK') {
          this.$emit('addressUpdate', results)
          console.log('geocodeAddress', results)
        } else {
          console.log('Geocode was not successful for the following reason: ' + status)
        }
      }.bind(this))
    },
    geocodeCoords () {
      var latlng = {lat: parseFloat(this.lat), lng: parseFloat(this.lng)}
      this.geocoder.geocode({'location': latlng}, function (results, status) {
        if (status === 'OK') {
          this.$emit('locationUpdate', results)
          console.log('geocodeCoords', results)
        } else {
          console.log('Geocode was not successful for the following reason: ' + status)
        }
      }.bind(this))
    }
  },
  resetMap () {
    this.map.setCenter(this.marker.getPosition())
  },
  watch: {
    lat: {
      handler: function (val, oldVal) {
        this.geocodeCoords()
      }
    },
    lng: {
      handler: function (val, oldVal) {
        this.geocodeCoords()
      }
    },
    address: {
      handler: function (val, oldVal) {
        this.updateMap()
      }
    },
    zoom: {
      handler: function (val, oldVal) {
        this.map.setZoom(parseFloat(this.zoom))
      }
    }
  },
  computed: {
    geolocation: function () {
      console.log('Navigator initialised', navigator.geolocation)
      return navigator.geolocation
    }
  }
}
</script>
