import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthSelectors from "../../redux/auth/authSelectors.js";

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = useSelector(AuthSelectors.selectIsAuthenticated);

  if (isAuthenticated) {
    return <Route element={children} {...rest}></Route>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
