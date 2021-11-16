import React from "react";

import Table from "./components/Table/Table.jsx";
import "./App.css";
import columns from "./data/columns";
import countries from "./data/countries";

const App = () => {
  return (
    <>
      <div className="App">
        <section>
          <Table columns={columns} data={countries} />
        </section>
      </div>
    </>
  );
};
export default App;
