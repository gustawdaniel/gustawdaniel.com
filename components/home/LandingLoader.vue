<template>
  <div id="pb_loader" ref="pb_loader" class="show fullscreen">
    <svg class="circular" width="100px" height="100px">
      <circle
        class="path-bg path-resize"
        cx="50"
        cy="50"
        r="32"
        fill="none"
        stroke-width="1"
        stroke="#eeeeee"
      ></circle>
      <circle
        class="path path-internal path-resize"
        cx="50"
        cy="50"
        r="32"
        fill="none"
        stroke-width="1"
        stroke-miterlimit="10"
        stroke="#1d82ff"
      ></circle>
    </svg>

    <svg class="circular" width="100px" height="100px">
      <circle
        class="path-bg"
        cx="50"
        cy="50"
        r="37"
        fill="none"
        stroke-width="1"
        stroke="#eeeeee"
      ></circle>
      <circle
        class="path path-external"
        cx="50"
        cy="50"
        r="37"
        fill="none"
        stroke-width="1"
        stroke-miterlimit="1"
        stroke="#1d82ff"
      ></circle>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'LandingLoader',
    mounted() {
      this.$refs.pb_loader.classList.remove('show');
    }
  }
</script>

<style scoped>

</style>
