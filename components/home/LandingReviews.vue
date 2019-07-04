<template>
  <!--  pb_section bg-light pb_slant-white pb_pb-250-->
  <section id="section-reviews" class="pb_section pb_slant-white">
    <div class="container">
      <div class="row justify-content-center mb-1">
        <div class="col-md-6 text-center mb-5">
          <h5 class="text-uppercase pb_font-15 mb-2 pb_color-dark-opacity-3 pb_letter-spacing-2">
            <strong>Reviews</strong>
          </h5>
          <h2>My clients opinions</h2>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md">
          <no-ssr>
            <carousel-3d
              :autoplay="true"
              :border="0"
              :controls-visible="true"
              :autoplay-timeout="5000000"
              :display="3"
              :width="800"
              :height="500"
              class="d-none d-sm-block"
            >
              <slide v-for="(opinion, index) in opinions" :key="index" :index="index">
                <div class="carousel-caption p-md-4 m-md-4 p-lg-5 m-lg-5">
                  <blockquote
                    class="testimonial pb_text-indigo normalize-font"
                    :class="opinion.class"
                    v-text="opinion.text"></blockquote>
                  <a :href="opinion.url">
                    <h3 class="heading">{{ opinion.author }}</h3>
                    <span class="subheading">{{ opinion.title }}</span>
                  </a>
                </div>
              </slide>
            </carousel-3d>
          </no-ssr>

          <div class="d-block d-sm-none">
            <div v-for="(opinion, index) in opinions" :key="index" class="card mb-1">
              <div class="card-body">
                <p class="normalize-font">{{ opinion.text }}</p>

                <a :href="opinion.url" class="text-center">
                  <h5>{{ opinion.author }}</h5>
                  <p>{{ opinion.title }}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  // import { Carousel3d, Slide } from 'vue-carousel-3d';

  export default {
    name: 'LandingReviews',
    // components: {
    //   Carousel3d: () => import('vue-carousel-3d')['Carousel3d'],
    //   Slide: () => import('vue-carousel-3d')['Slide']
    // },
    data() {
      return {
        opinions: [
          {
            class: 'h1',
            text: 'The application works. Good job!',
            author: 'Stanisław Zakrzewsk',
            title: 'CEO Omnisys S.A.',
            url: 'https://www.linkedin.com/in/stanis%C5%82aw-zakrzewski-434109143/'
          },
          {
            class: 'lead',
            text: 'An extremely organized and versatile guy. Daniel developed the Swapson web platform for me, I greatly appreciate his concern for quality and attention to detail. I would highly recommend.',
            author: 'Tomasz Olszewski',
            title: 'CEO Swapson',
            url: 'https://swapson.com'
          },
          {
            class: 'h2',
            text: 'In a week you saved me several months of work.',
            author: 'Filip Topolski',
            title: 'Marketing Director Befame sp. z o.o.',
            url: 'https://www.linkedin.com/in/filip-topolski-a9b5abbb/'
          },
          {
            class: 'h3',
            text: 'After a week of testing I\'ve already got one great offer, it only proves that the application works.',
            author: 'Andrzej Byzdra',
            title: 'Real Estate Investor',
            url: 'https://www.linkedin.com/in/andrzejbyzdra/'
          }
        ]
      }
    }
  }
</script>

<style>

  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%236560E9' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
  }

  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%236560E9' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
  }

  .carousel-indicators li.bg-accent {
    background-color: #6560E9;
  }

  /*.carousel-3d-slide.current{*/
  /*  background: radial-gradient(#528fff, #6363f9);*/
  /*}*/
  /*.carousel-3d-slide{*/
  /*  background: radial-gradient(#ababd6, #8f90b0);*/
  /*}*/
  .carousel-3d-slide.current {
    background: radial-gradient(#f2f7ff, #e7e7ff);
  }

  .carousel-3d-slide {
    background: radial-gradient(#bebed4, #9696b0);
  }

  .normalize-font {
    font-weight: 200 !important;
  }
</style>
