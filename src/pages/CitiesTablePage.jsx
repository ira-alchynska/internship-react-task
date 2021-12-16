import React from "react";
import CitiesTable from "../components/CitiesTable/CitiesTable";
import { useSelector } from "react-redux";
import AuthSelectors from "../redux/auth/authSelectors";
const CitiesTablePage = () => {
  //const isLogin = useSelector(AuthSelectors.selectIsAuthenticated);

  return <CitiesTable />;
};

export default CitiesTablePage;
