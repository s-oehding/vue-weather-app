<template>
  <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">ML-weather</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <slot class="navbar-nav mr-auto" name="inputs"></slot>
      <slot class="navbar-nav mr-auto" name="buttons"></slot>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    init () {
      console.log('Navbar init')
    },
    getGeoLocation () {
      this.$emit('getGeoLocation')
      console.log('emitting getGeoLocationTrigger')
    },
    resetMap () {
      this.$emit('resetMap')
    }
  }
}
</script>