import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModalOpen } from "./redux/actions.js";
import { Routes, Route, NavLink } from "react-router-dom";
import Modal from "./components/Modal/Modal.jsx";
//import Table from "./components/Table/Table.jsx";
import CountriesTablePage from "./pages/CountriesTablePage.jsx";
import StatesTablePage from "./pages/StatesTablePage.jsx";
import CitiesTablePage from "./pages/CitiesTablePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CountriesSelectors from "./redux/selectors";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(CountriesSelectors.selectIsModalOpen);
  const modalData = useSelector(CountriesSelectors.selectModalData);

  return (
    <>
      <div className="App">
        <nav>
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

        {isModalOpen && (
          <Modal
            currentItem={modalData}
            onClose={() => dispatch(setModalOpen())}
          />
        )}
      </div>
    </>
  );
};
export default App;
