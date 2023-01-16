<template>
  <section id="section-rules" class="pb_section bg-light pb_slant-white pb_pb-250">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-md-6 text-center mb-5">
          <h5 class="text-uppercase pb_font-15 mb-2 pb_color-dark-opacity-3 pb_letter-spacing-2">
            <strong>Rules</strong>
          </h5>
          <h2>What is important for me?</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6">
          <div class="media d-block pb_feature-v1 text-left">
            <div class="pb_icon">
              <!--              <ion-icon src="/assets/fonts/ionicons/svg/ios-bookmarks-outline.svg"></ion-icon>-->
              <IosBookmarksOutlineIcon />
            </div>
            <div class="media-body">
              <h5 class="mt-0 mb-3 heading">
                Respect for Time
              </h5>
              <p class="text-sans-serif">
                I love invest time in creating detailed specification. But my webservices are developed instant and load
                <a href="">in the blink of an eye</a>.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="media d-block pb_feature-v1 text-left">
            <div class="pb_icon">
              <IosSpeedometerOutlineIcon />
            </div>
            <div class="media-body">
              <h5 class="mt-0 mb-3 heading">
                Clean Code
              </h5>
              <p class="text-sans-serif">
                Refactoring is one of my favorite part of writing code. I offering code review
                for your project and invite to
                <a href="">check quality of my code</a>.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="media d-block pb_feature-v1 text-left">
            <div class="pb_icon">
              <IosInfiniteOutlineIcon />
            </div>
            <div class="media-body">
              <h5 class="mt-0 mb-3 heading">
                Security
              </h5>
              <p class="text-sans-serif">
                Even prototype can be secured properly. I give a guarantee of security fixes
                and use secure communicator to exchange keys and passwords.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-sm-6">
          <div class="media d-block pb_feature-v1 text-left">
            <div class="pb_icon">
              <IosColorFilterOutlineIcon />
            </div>
            <div class="media-body">
              <h5 class="mt-0 mb-3 heading">
                Understanding of Business
              </h5>
              <p class="text-sans-serif">
                I am not only developer. I will try to understand your business and tune up
                technical solutions for your current and future needs.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="media d-block pb_feature-v1 text-left">
            <div class="pb_icon">
              <IosWineOutlineIcon />
            </div>
            <div class="media-body">
              <h5 class="mt-0 mb-3 heading">
                Initiative
              </h5>
              <p class="text-sans-serif">
                You can suspect my ideas, propositions. I will actively collaborate with you to
                create awesome product and prepare to scale.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="media d-block pb_feature-v1 text-left">
            <div class="pb_icon">
              <IosCogOutlineIcon />
            </div>
            <div class="media-body">
              <h5 class="mt-0 mb-3 heading">
                Transparency
              </h5>
              <p class="text-sans-serif">
                Any day of my work is be described in final report. You will have full
                knowledge what cost how much and why.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CommonIconDefs />
  </section>
</template>

<script>
  import IosBookmarksOutlineIcon from '../icons/IosBookmarksOutlineIcon';
  import IosCogOutlineIcon from '../icons/IosCogOutlineIcon';
  import IosColorFilterOutlineIcon from '../icons/IosColorFilterOutlineIcon';
  import IosInfiniteOutlineIcon from '../icons/IosInfiniteOutlineIcon';
  import IosSpeedometerOutlineIcon from '../icons/IosSpeedometerOutlineIcon';
  import IosWineOutlineIcon from '../icons/IosWineOutlineIcon';
  import CommonIconDefs from '../icons/CommonIconDefs';

  export default {
    name: 'LandingRules',
    components: {
      IosBookmarksOutlineIcon,
      IosCogOutlineIcon,
      IosColorFilterOutlineIcon,
      IosInfiniteOutlineIcon,
      IosSpeedometerOutlineIcon,
      IosWineOutlineIcon,
      CommonIconDefs
    }
  }
</script>

<!--ion-icon-->
<style>

  .pb_icon {
    display: flex;
    justify-content: left;
  }

  .pb_icon svg {
    max-height: 70px;
    max-width: 70px;
    fill: url(#gradient)
  }

</style>
