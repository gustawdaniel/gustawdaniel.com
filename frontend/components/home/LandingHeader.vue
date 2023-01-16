<template>
  <section
    id="section-home"
    class="pb_cover_v3 overflow-hidden cover-bg-indigo cover-bg-opacity text-left pb_gradient_v1 pb_slant-light">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-md-6">
          <h2 class="heading mb-3">
            Daniel Gustaw
          </h2>
          <div class="sub-heading">
            <p class="mb-4">
              Web Developer specialised in super fast prototyping. CTO in Precise Lab.
            </p>
            <p class="mb-4">
              I can help create an MVP, advise on the selection of a technical stack, build microservices architecture.
            </p>
<!--            <p class="mb-5">-->
<!--              <a class="btn btn-success btn-lg pb_btn-pill" href="https://blog.gustawdaniel.com"><span-->
<!--                class="pb_font-14 text-uppercase pb_letter-spacing-1">See Blog</span></a>-->
<!--              <a class="btn btn-success btn-lg pb_btn-pill smoothscroll" href="#section-pricing"><span-->
<!--                class="pb_font-14 text-uppercase pb_letter-spacing-1">Projects</span></a>-->
<!--            </p>-->
          </div>
        </div>
        <div class="col-md-1">
        </div>
        <div class="col-md-5 relative align-self-center">
          <LandingContactForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import LandingContactForm from './LandingContactForm';

  export default {
    name: 'LandingHeader',
    components: { LandingContactForm }

  }
</script>

<style scoped>

</style>
