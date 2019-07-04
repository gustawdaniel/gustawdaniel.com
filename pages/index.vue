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
        link: [
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Crimson+Text:400|Montserrat:200,300'
          },
          // {
          //   rel: 'stylesheet',
          //   href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
          // },
          { rel: 'stylesheet', href: 'assets/css/style.css' },
          { rel: 'stylesheet', href: 'assets/css/landing-2.css' }
        ],
        // script: [
        //   {
        //     src: 'https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js'
        //   }
        // ]
      }
    }
  }
</script>

<style>

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
</style>
