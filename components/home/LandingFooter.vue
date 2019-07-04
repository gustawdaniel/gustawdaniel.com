<template>
  <footer class="pb_footer bg-light" role="contentinfo">
    <div class="container">
      <div class="row text-center">
        <div class="col">
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="https://github.com/gustawdaniel" class="p-2">
<!--                <i class="fa fa-github"></i>-->
                <LogoGithubIcon />
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://stackoverflow.com/users/6398044/daniel" class="p-2">
<!--                <i class="fa fa-stack-overflow"></i>-->
                <LogoStackOverflowIcon />
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.linkedin.com/in/daniel-gustaw/" class="p-2">
<!--                <i class="fa fa-linkedin"></i>-->
                <LogoLinkedInIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <p class="pb_font-14">
            &copy; 2019. All Rights Reserved.
          </p>
          <p class="pb_font-14 pb_color-primary">
            Daniel Gustaw
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import LogoGithubIcon from '../icons/LogoGithubIcon'
  import LogoLinkedInIcon from '../icons/LogoLinkedInIcon'
  import LogoStackOverflowIcon from '../icons/LogoStackOverflowIcon'

  export default {
    name: 'LandingFooter',
    components: {
      LogoGithubIcon,
      LogoLinkedInIcon,
      LogoStackOverflowIcon
    }
  }
</script>

<style scoped>
  .list-inline-item a svg {
    width: 20px;
    height: 20px;
    fill: #007bff;
  }
</style>
