const loginRoute = (context) => {
    sessionStorage['auth_redirect'] = context.route.path
    context.redirect(302, '/login')
}

export default (context) => {
    if (!context.store.getters['auth/isAuthenticated']) loginRoute(context);
}