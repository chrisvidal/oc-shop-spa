//
// user mutations
//
export default {
    setLoginEmail(state, email) {
        state.loginForm.email = email;
    },
    setLoginIsLoading(state, isLoading) {
        state.loginForm.isLoading = isLoading;
    },
    setLoginPassword(state, password) {
        state.loginForm.password = password;
    },
};
