<template>
  <div id="map"></div>
</template>

<script>
import GoogleMapsLoader from 'google-maps'
export default {
  name: 'gmap',
  props: ['apiKey', 'lat', 'lng', 'address', 'zoom'],
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
        var location = { lat: parseFloat(this.lat), lng: parseFloat(this.lng) }
        var offset = document.body.clientWidth / 100 * 10

        this.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          disableDefaultUI: true,
          scrollwheel: false,
          center: location
        })
        this.map.panBy(offset, 0)

        this.geocoder = new google.maps.Geocoder()

        this.marker = new google.maps.Marker({
          position: location,
          animation: google.maps.Animation.DROP,
          map: this.map
        })

        this.map.addListener('click', function (event) {
          this.$parent.location.lng = event.latLng.lng()
          this.$parent.location.lat = event.latLng.lat()
        }.bind(this))
      })
    },
    geocodeAddress () {
      this.geocoder.geocode({'address': this.address}, function (results, status) {
        if (status === 'OK') {
          this.$parent.location.lat = results[0].geometry.location.lat()
          this.$parent.location.lng = results[0].geometry.location.lng()
        } else {
          console.log('Geocode was not successful for the following reason: ' + status)
        }
      }.bind(this))
    },
    updateMap () {
      var location = { lat: parseFloat(this.lat), lng: parseFloat(this.lng) }
      var offset = document.body.clientWidth / 100 * 10
      this.map.setCenter(location)
      this.map.panBy(offset, 0)
      this.marker.setPosition(location)
    }
  },
  resetMap () {
    this.map.setCenter(this.marker.getPosition())
  },
  watch: {
    lat: {
      handler: function (val, oldVal) {
        this.updateMap()
      }
    },
    lng: {
      handler: function (val, oldVal) {
        this.updateMap()
      }
    },
    address: {
      handler: function (val, oldVal) {
        this.geocodeAddress()
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
