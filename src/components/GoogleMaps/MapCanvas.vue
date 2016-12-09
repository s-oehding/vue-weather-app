<template>
  <div id="map"></div>
</template>

<script>
import GoogleMapsLoader from 'google-maps'
export default {
  name: 'map-canvas',
  props: ['apiKey', 'lat', 'lng', 'zoom'],
  data () {
    return {
      map: {}
    }
  },
  mounted () {
    this.initMap()
  },
  methods: {
    initMap () {
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
          this.$parent.lng = event.latLng.lng()
          this.$parent.lat = event.latLng.lat()
        }.bind(this))
      })
    },
    updateMap () {
      var location = { lat: parseFloat(this.lat), lng: parseFloat(this.lng) }
      // var offset = document.body.clientWidth / 100 * 10
      // this.map.panBy(offset, 0)
      this.map.setCenter(location)
      this.marker.setPosition(location)
    }
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
