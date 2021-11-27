import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCountries } from "./redux/actions.js";
import countries from "./data/countries.js";
import Table from "./components/Table/Table.jsx";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const fullState = useSelector((state) => state);

  useEffect(() => {
    dispatch(setCountries(countries));
  }, []);

  useEffect(() => {
    console.log(fullState);
  }, [fullState]);

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
