<template>
  <div class="container">
    <div>
      <logo />
      <div class="center">
        <button v-google-signin-button="clientId" class="google-signin-button">Continue with Google</button>
      </div>
      <div class="links">
        <nuxt-link to="/">Home</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleSignInButton from 'vue-google-signin-button-directive'
import settings from '~/config/settings.js'
import Logo from '~/components/Logo.vue'

export default {
    components: {
        Logo
    },
    directives: {
        GoogleSignInButton
    },
    data: () => ({
        clientId: settings.authClientId
    }),
    methods: {
        OnGoogleAuthSuccess (idToken) {
            const req = { id_token: idToken }
            this.$store.dispatch('auth/setUser', req).then(() => {
              const redirect = sessionStorage['auth_redirect'] || '/'
              sessionStorage.removeItem('auth_redirect')
              this.$router.push({ path: redirect })
            })
        },
        OnGoogleAuthFail (error) {
            console.log(error)
        }
    }
}
</script>

<style>
.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
