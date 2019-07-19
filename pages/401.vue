<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Not Authorised
      </h1>
      <h2 class="subtitle">
        Sorry, you are not authorised to access this
      </h2>
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
    }
}
</script>