import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { setModalOpen } from "./redux/actions.js";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import CountriesTablePage from "./pages/CountriesTablePage.jsx";
import StatesTablePage from "./pages/StatesTablePage.jsx";
import CitiesTablePage from "./pages/CitiesTablePage.jsx";
//import CountryCardPage from "./pages/CountryCardPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AuthSelectors from "./redux/auth/authSelectors";
import { setIsAuthenticated } from "./redux/auth/authActions";
import { PrivateRoute } from "./components/routes/PrivateRoute.jsx";
import "./App.css";
import CountryCardList from "./components/CountryCard/CountryCardList.jsx";

const App = () => {
  const dispatch = useDispatch();
  const isLogIn = useSelector(AuthSelectors.selectIsAuthenticated);

  useEffect(() => {
    if (localStorage.getItem("isLogin") === "true") {
      dispatch(setIsAuthenticated(true));
    }
  }, []);

  return (
    <>
      <div className="main-container"></div>
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
          {isLogIn && (
            <NavLink to="/cities" className="NavLink" activeClassName="active">
              Cities
            </NavLink>
          )}

          <NavLink to="/states" className="NavLink" activeClassName="active">
            States
          </NavLink>
          <NavLink to="/card" className="NavLink" activeClassName="active">
            CountryCard
          </NavLink>
          {!isLogIn && (
            <NavLink to="/login" className="NavLink" activeClassName="active">
              Login
            </NavLink>
          )}
          {isLogIn && (
            <button
              className="logout-btn"
              onClick={() => dispatch(setIsAuthenticated(false))}
            >
              Logout
            </button>
          )}
        </nav>

        <Routes>
          <Route exact path="/" element={<CountriesTablePage />} />
          <Route
            path="cities"
            element={
              <PrivateRoute>
                <CitiesTablePage />
              </PrivateRoute>
            }
          />
          <Route path="states" element={<StatesTablePage />} />
          <Route path="card" element={<CountryCardList />} />
          {!isLogIn && <Route path="login" element={<LoginPage />} />}
        </Routes>
      </div>
    </>
  );
};
export default App;
