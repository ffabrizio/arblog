<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Not Found
      </h1>
      <h2 class="subtitle">
        The item you were looking for ain't here
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