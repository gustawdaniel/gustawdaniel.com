<template>
  <nav id="pb-navbar" class="navbar navbar-expand-lg navbar-dark pb_navbar pb_scrolled-light">
    <div class="container">
      <a class="navbar-brand" href="/">Daniel Gustaw</a>
      <button
        class="navbar-toggler ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#probootstrap-navbar"
        aria-controls="probootstrap-navbar"
        :aria-expanded="open"
        aria-label="Toggle navigation"
        @click="open = !open"
      >
        <span class="icon">
          <IosMenuOutlineIcon />
        </span>
      </button>
      <div id="probootstrap-navbar" class="collapse navbar-collapse" :class="{show: open}">
        <ul class="navbar-nav ml-auto">
<!--          <li class="nav-item">-->
<!--            <a class="nav-link" href="#section-home" @click="open = false">Me</a>-->
<!--          </li>-->
<!--          <li class="nav-item">-->
<!--            <a class="nav-link" href="#section-rules" @click="open = false">Rules</a>-->
<!--          </li>-->
          <!--          <li class="nav-item"><a class="nav-link" href="#section-pricing">Projects</a></li>-->
<!--          <li class="nav-item">-->
<!--            <a class="nav-link" href="#section-reviews" @click="open = false">Reviews</a>-->
<!--          </li>-->
          <!--          <li class="nav-item"><a class="nav-link" href="#section-faq">FAQ</a></li>-->
<!--          <li class="nav-item cta-btn ml-xl-2 ml-lg-2 ml-md-0 ml-sm-0 ml-0">-->
<!--            <a-->
<!--              class="nav-link"-->
<!--              href="https://uicookies.com/"-->
<!--              target="_blank"-->
<!--            ><span-->
<!--              class="pb_rounded-4 px-4"-->
<!--            >Blog</span></a>-->
<!--          </li>-->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import IosMenuOutlineIcon from '../icons/IosMenuOutlineIcon'

  export default {
    name: 'LandingNavBar',
    components: { IosMenuOutlineIcon },
    data() {
      return {
        open: false
      }
    }
  }
</script>

<style scoped>
  .pb_navbar .navbar-toggler .icon, .pb_navbar .navbar-toggler .icon * {
    width: 30px;
    height: 30px;
  }

  .pb_navbar .navbar-toggler {
    fill: white;
  }

  .pb_navbar.scrolled .navbar-toggler {
    fill: rgba(0, 0, 0, 0.5);;
  }
</style>
