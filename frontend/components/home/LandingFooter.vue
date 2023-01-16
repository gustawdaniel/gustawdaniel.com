<template>
  <footer class="pb_footer bg-light" role="contentinfo">
    <div class="container">
      <div class="row text-center">
        <div class="col">
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="https://github.com/gustawdaniel" class="p-2" target="_blank">
                <font-awesome-icon :icon="['fab', 'github']"/>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://stackoverflow.com/users/6398044/daniel" class="p-2" target="_blank">
                <font-awesome-icon :icon="['fab', 'stack-overflow']"/>

              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.linkedin.com/in/daniel-gustaw/" class="p-2" target="_blank">
                <font-awesome-icon :icon="['fab', 'linkedin']"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <p class="pb_font-14">
            &copy;<span class="pb_color-primary">Daniel Gustaw</span> {{ new Date().getFullYear() }}.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import { faGithub } from '@fortawesome/free-brands-svg-icons'

  export default {
    name: 'LandingFooter',
    computed: {
      faGithub () {
        return faGithub
      }
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
