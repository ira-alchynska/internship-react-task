import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthSelectors from "../../redux/auth/authSelectors";

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(AuthSelectors.selectIsAuthenticated);

  return isAuthenticated ? children : <Navigate to="/login" />;
};
