import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
//import { setModalOpen } from "./redux/actions.js";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
//import Modal from "./components/Modal/Modal.jsx";
import CountriesTablePage from "./pages/CountriesTablePage.jsx";
import StatesTablePage from "./pages/StatesTablePage.jsx";
import CitiesTablePage from "./pages/CitiesTablePage.jsx";
//import CountryCardPage from "./pages/CountryCardPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
//import CountriesSelectors from "./redux/countries/selectors";
import { setIsAuthenticated } from "./redux/auth/authActions";
import PrivateRoute from "./components/routes/PrivateRoute.jsx";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      dispatch(setIsAuthenticated(true));
    }
  });

  return (
    <>
      <div className="App">
        <nav className=" sidebar">
          <NavLink
            exact="true"
            to="/"
            className="NavLink"
            activeClassName="active"
          >
            Countries
          </NavLink>
          <NavLink to="/cities" className="NavLink" activeClassName="active">
            Cities
          </NavLink>
          <NavLink to="/states" className="NavLink" activeClassName="active">
            States
          </NavLink>
          <NavLink to="/card" className="NavLink" activeClassName="active">
            CountryCard
          </NavLink>
          <NavLink to="/login" className="NavLink" activeClassName="active">
            Login
          </NavLink>
        </nav>

        <Routes>
          <Route exact path="/" element={<CountriesTablePage />} />
          <Route path="cities" element={<CitiesTablePage />} />
          <Route path="states" element={<StatesTablePage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
