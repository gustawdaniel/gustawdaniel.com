<template>
  <section
    class="pb_xl_py_cover overflow-hidden pb_slant-light pb_gradient_v1 cover-bg-opacity-8 landing-final-background">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-md-5 justify-content-center">
          <h2 class="heading mb-5 pb_font-40">
            We can turn your vision into working web service
          </h2>
          <div class="sub-heading">
            <p class="mb-4">
              Let me know what you need.
            </p>
          </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-5">
          <LandingContactForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import LandingContactForm from './LandingContactForm'

  export default {
    name: 'LandingFinal',
    components: { LandingContactForm }
  }
</script>

<style scoped>

  .landing-final-background {
    background-image: url(../../static/assets/images/1900x1200_img_5.jpg)
  }

</style>
