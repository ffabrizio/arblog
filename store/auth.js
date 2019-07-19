import settings from '~/config/settings.js'

export const state = () => {
  if (sessionStorage['user'] != null) return ({ user: JSON.parse(sessionStorage['user']) })
  return ({ user: null })
}

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  }
}

export const actions = {
  async setUser({ commit }, req) {
    const endpoint = `${settings.azDomain}/${settings.azAuth}`
    return this.$axios.post(endpoint, req).then(res => {
      sessionStorage['id_token'] = req.id_token
      sessionStorage['access_token'] = res.data.authenticationToken
      sessionStorage['user'] = JSON.stringify(res.data.user)
      
      commit('SET_USER', res.data.user)
    })
  }
}

export const getters = {
  isAuthenticated(state) {
    return !!state.user
  },
  loggedUser(state) {
    return state.user
  }
}