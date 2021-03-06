export const getUserName = (state) => state.auth.user.name;
export const getUserEmail = (state) => state.auth.user.email;
export const getLoggedIn = (state) => state.auth.isLoggedIn;
export const getToken = (state) => state.auth.token;
export const getRefreshing = (state) => state.auth.isRefresh;
