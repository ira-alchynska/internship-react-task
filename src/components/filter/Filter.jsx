import React from "react";
import "./styles.css";

const Filter = ({ onChange }) => {
  return (
    <div>
      <label htmlFor="filter">
        Search by name
        <input
          type="text"
          className="input"
          placeholder="Search country"
          name="filter"
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Filter;
