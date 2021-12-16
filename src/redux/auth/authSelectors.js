const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
const selectUserId = (state) => state.auth.userId;
const AuthSelectors = {
  selectIsAuthenticated,
  selectUserId,
};

export default AuthSelectors;
