<template>
  <div>
    <LandingNavBar />
    <LandingHeader />
    <LandingRules />
    <!--    <LandingProjects />-->
    <!--    <LandingBlog/>-->
    <LandingReviews />
    <LandingFinal />
    <LandingFooter />

    <LandingLoader />
  </div>
</template>

<script>

  import LandingRules from '../components/home/LandingRules';
  import LandingHeader from '../components/home/LandingHeader';
  import LandingNavBar from '../components/home/LandingNavBar';

  import LandingReviews from '../components/home/LandingReviews';
  import LandingLoader from '../components/home/LandingLoader';
  import LandingFooter from '../components/home/LandingFooter';
  import LandingFinal from '../components/home/LandingFinal';
  // import LandingBlog from '../components/home/LandingBlog';
  // import LandingProjects from '../components/home/LandingProjects';

  /*
   * Show  and hide navigation on scrolling and colorize it
   */
  const scrollWindow = function (HTML, navBar, menuItems, scrollItems) {
    window.addEventListener('scroll', function (e) {
      const st = HTML.scrollTop;

      if (st > 150) {
        if (!navBar.classList.contains('scrolled')) {
          navBar.classList.add('scrolled');
        }
      }
      if (st < 150) {
        if (navBar.classList.contains('scrolled')) {
          navBar.classList.remove('scrolled');
          navBar.classList.remove('sleep');
        }
      }
      if (st > 350) {
        if (!navBar.classList.contains('awake')) {
          navBar.classList.add('awake');
        }
      }
      if (st < 350) {
        if (navBar.classList.contains('awake')) {
          navBar.classList.remove('awake');
          navBar.classList.add('sleep');
        }
      }

      let id = scrollItems[scrollItems.length - 1].id;
      for (let i = 0; i < scrollItems.length - 1; i++) {
        if (scrollItems[i].getBoundingClientRect().top - 200 <= 0 && scrollItems[i + 1].getBoundingClientRect().top - 200 >= 0) {
          id = scrollItems[i].id;
          break;
        }
      }

      menuItems.forEach((i) => {
        i.classList.remove('active');
      });
      [...menuItems].find(i => i.href.replace(/.*#/, '#') === `#${id}`).classList.add('active');
    });
  };

  export default {
    components: {
      // LandingBlog,
      // LandingProjects,
      LandingFinal,
      LandingFooter,
      LandingHeader,
      LandingNavBar,
      LandingRules,
      LandingLoader,
      LandingReviews
    },
    mounted() {
      const HTML = document.querySelector('html');
      const navBar = HTML.querySelector('.pb_navbar');
      const menuItems = navBar.querySelectorAll('a[href^="#"]');
      const scrollItems = [...menuItems].map(item => document.querySelector(item.href.replace(/.*#/, '#')))

      scrollWindow(HTML, navBar, menuItems, scrollItems);
    },
    head() {
      return {
        meta: [],
        // link: [
        //   {
        //     rel: 'stylesheet',
        //     href: 'https://fonts.googleapis.com/css?family=Crimson+Text:400|Montserrat:200,300'
        //   }
          // {
          //   rel: 'stylesheet',
          //   href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
          // },
          // { rel: 'stylesheet', href: 'assets/css/style.css' },
          // { rel: 'stylesheet', href: 'assets/css/landing-2.css' }
        // ]
        // script: [
        //   {
        //     src: 'https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js'
        //   }
        // ]
      }
    }
  }
</script>

<style lang="scss">

  html {
    scroll-behavior: smooth;
  }

  .pb_height-50 {
    height: 50px !important;
  }

  .pb_height-150 {
    height: 150px !important;
  }

  .text-sans-serif {
    font-family: "Montserrat", Arial, sans-serif;
  }

  .pb_pb-250 {
    padding-bottom: 250px !important;
  }

  .pb_letter-spacing-2 {
    letter-spacing: 0.2em !important;
  }

  .pb_color-dark-opacity-3 {
    color: rgba(0, 0, 0, 0.3) !important;
  }

  .pb_font-15 {
    font-size: 15px !important;
  }

  .pb_font-40 {
    font-size: 40px !important;
  }

  .pb_font-14 {
    font-size: 14px !important;
  }

  .pb_color-primary {
    color: #1d82ff !important;
  }

  .pb_text-indigo {
    color: #4E3188 !important;
  }

  @import"~bootstrap/scss/functions";
  @import"~bootstrap/scss/variables";
  @import"~bootstrap/scss/mixins";
  @import"~bootstrap/scss/root";
  @import"~bootstrap/scss/reboot";
  @import"~bootstrap/scss/type";
  /*@import"~bootstrap/scss/images";*/
  /*@import"~bootstrap/scss/code";*/
  @import"~bootstrap/scss/grid";
  /*@import"~bootstrap/scss/tables";*/
  @import"~bootstrap/scss/forms";
  @import"~bootstrap/scss/buttons";
  @import"~bootstrap/scss/transitions";
  /*@import"~bootstrap/scss/dropdown";*/
  /*@import"~bootstrap/scss/button-group";*/
  /*@import"~bootstrap/scss/input-group";*/
  /*@import"~bootstrap/scss/custom-forms";*/
  @import"~bootstrap/scss/nav";
  @import"~bootstrap/scss/navbar";
  @import"~bootstrap/scss/card";
  /*@import"~bootstrap/scss/breadcrumb";*/
  /*@import"~bootstrap/scss/pagination";*/
  /*@import"~bootstrap/scss/badge";*/
  /*@import"~bootstrap/scss/jumbotron";*/
  /*@import"~bootstrap/scss/alert";*/
  /*@import"~bootstrap/scss/progress";*/
  /*@import"~bootstrap/scss/media";*/
  @import"~bootstrap/scss/list-group";
  /*@import"~bootstrap/scss/close";*/
  /*@import"~bootstrap/scss/toasts";*/
  /*@import"~bootstrap/scss/modal";*/
  /*@import"~bootstrap/scss/tooltip";*/
  /*@import"~bootstrap/scss/popover";*/
  @import"~bootstrap/scss/carousel";
  /*@import"~bootstrap/scss/spinners";*/
  @import"~bootstrap/scss/utilities";
  /*@import"~bootstrap/scss/print";*/

  @import "../assets/scss/fonts";

  @import "../assets/scss/style";
  /*@import "../static/assets/css/style.css";*/
  @import "../assets/scss/landing-2";

  .bg-light {
    background-color: #f2f4f9 !important;
  }


</style>
