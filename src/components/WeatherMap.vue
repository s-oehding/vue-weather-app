<template>
  <div id="world"></div>
</template>

<script>
import VIZI from 'vizicities'
// import THREE from 'three'

export default {
  name: 'weatherMap',
  // data () {
  //   return {
  //     location: {
  //       lat: '51.505',
  //       lon: '-0.09'
  //     }
  //   }
  // },
  ready () {
    var coords = [40.739940, -73.988801]

    var world = VIZI.world('world', {
      skybox: false,
      postProcessing: false
    }).setView(coords)

    // Add controls
    VIZI.Controls.orbit().addTo(world)

    // CartoDB basemap
    VIZI.imageTileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    }).addTo(world)

    // Buildings from Mapzen
    VIZI.topoJSONTileLayer('https://vector.mapzen.com/osm/buildings/{z}/{x}/{y}.topojson?api_key=vector-tiles-NT5Emiw', {
      interactive: false,
      style: function (feature) {
        var height

        if (feature.properties.height) {
          height = feature.properties.height
        } else {
          height = 10 + Math.random() * 10
        }

        return {
          height: height
        }
      },
      filter: function (feature) {
        // Don't show points
        return feature.geometry.type !== 'Point'
      },
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://whosonfirst.mapzen.com#License">Who\'s On First</a>.'
    }).addTo(world)
  },
  methods: {

  }
}
</script>

<style>
  * { margin: 0; padding: 0; }
  html, body { height: 100%; overflow: hidden;}

  #world { height: 100%; }
</style>