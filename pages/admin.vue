<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        AR Blog Admin
      </h1>
      <div class="links">
        <nuxt-link to="/">Home</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  middleware: 'requiresLogin'
}
</script>