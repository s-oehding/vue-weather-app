<template>
  <b-navbar type="light" variant="default" full>
    <a class="navbar-brand" href="#">ML Weather</a>
    <form class="form-inline navbar-form float-xs-left">
      <slot name="inputs"></slot>
    </form>
    <form class="form-inline navbar-form float-xs-right">
      <slot name="buttons"></slot>
    </form>
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