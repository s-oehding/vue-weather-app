<template>
  <b-navbar type="light" variant="default" full>
    <a class="navbar-brand" href="#">ML Weather</a>
    <div class="form-inline navbar-form">
      <slot name="inputs"></slot>
    </div>
  </b-navbar>
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