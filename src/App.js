import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCountries, fetchCountries } from "./redux/actions.js";
import Table from "./components/Table/Table.jsx";
import "./App.css";

const App = () => {
  // useEffect(() => {
  //   dispatch(setCountries(countries));
  // }, []);

  return (
    <>
      <div className="App">
        <section>
          <Table />
        </section>
      </div>
    </>
  );
};
export default App;
