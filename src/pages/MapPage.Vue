<template>
<div>
  <page-content page-title="Weather Map">
    <div class="main-content" v-if="$parent.ready">
      <div class="row">
        <div class="column">
          <gmap
            :api-key="$parent.gmapKey"
            :location.sync="$parent.location"
            :address.sync="$parent.address"
            :newAddress.sync="$parent.newAddress"
            :zoom.sync="$parent.zoom"
            :reset.sync="$parent.reset"
            v-on:locationUpdate="locationUpdate"
            v-on:addressUpdate="addressUpdate">
          </gmap>
        </div>
      </div>
    </div>
  </page-content>
</div>
</template>

<script>
export default {
  methods: {
    resetMap () {
      this.reset = true
      this.$nextTick(function () {
        this.reset = false
      })
    },
    locationUpdate (newLocation) {
      // console.log('NewLocation', location)
      this.$parent.location = newLocation
    },
    addressUpdate (address) {
      // console.log('NewAddress', address)
      this.$parent.address = address
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-content {
    margin: 0 auto;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  .example {
    margin-bottom: 24px;
    overflow: hidden;

    img {
      margin: -45px auto;
      display: block;
    }
  }

  .button-actions {
    margin-bottom: 16px;
    text-align: center;

    .introduction {
      margin-bottom: .8em;
      font-size: 20px;
      line-height: 1.6em;
    }

    .md-button {
      margin-left: 0;
      color: #fff !important;
    }
  }

  .row {
    margin: 0 -10px;
    display: flex;
    flex-flow: row wrap;
  }

  .column {
    margin: 0 10px;
    flex: 1 1 30%;

    @media (max-width: 640px) {
      flex: 1 1 100%;
    }
  }
</style>