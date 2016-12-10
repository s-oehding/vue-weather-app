<template>
  <div id="map"></div>
</template>

<script>
import GoogleMapsLoader from 'google-maps'
export default {
  name: 'gmap',
  props: ['apiKey', 'location', 'address', 'newAddress', 'zoom', 'reset'],
  data () {
    return {
      map: {}
    }
  },
  created () {
    this.initMap()
  },
  methods: {
    initMap () {
      // console.log('Mounted GMAP ', this.apiKey, this.lat, this.lng, this)
      GoogleMapsLoader.KEY = this.apiKey
      GoogleMapsLoader.load((google) => {
        this.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          disableDefaultUI: true,
          scrollwheel: false,
          center: this.location
        })
        this.geocoder = new google.maps.Geocoder()
        this.geocodeCoords()

        this.marker = new google.maps.Marker({
          position: this.location,
          animation: google.maps.Animation.DROP,
          map: this.map
        })

        this.map.addListener('click', function (event) {
          var location = { lat: event.latLng.lat(), lng: event.latLng.lng() }
          this.$emit('locationUpdate', location)
        }.bind(this))
      })
    },
    geocodeAddress (address) {
      this.geocoder.geocode({'address': address}, function (results, status) {
        if (status === 'OK') {
          console.log(results)
          var newLocation = { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() }
          this.$emit('locationUpdate', newLocation)
        } else {
          console.log('Geocode was not successful for the following reason: ' + status)
        }
      }.bind(this))
    },
    geocodeCoords () {
      this.geocoder.geocode({'location': this.location}, function (results, status) {
        if (status === 'OK') {
          this.$emit('addressUpdate', results)
        } else {
          console.log('Geocode was not successful for the following reason: ' + status)
        }
      }.bind(this))
    },
    updateMap () {
      this.map.setCenter(this.location)
      this.marker.setPosition(this.location)
      this.geocodeCoords()
    },
    resetMap () {
      this.map.setCenter(this.marker.getPosition())
      console.log('reset')
    }
  },
  watch: {
    location: {
      handler: function (val, oldVal) {
        this.updateMap()
      },
      deep: true
    },
    newAddress: {
      handler: function (val, oldVal) {
        this.geocodeAddress(val)
      }
    },
    zoom: {
      handler: function (val, oldVal) {
        this.map.setZoom(parseFloat(this.zoom))
      }
    },
    reset: {
      handler: function (val, oldVal) {
        if (val === true) {
          this.resetMap()
        }
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
