import React from "react";
import "./styles.css";

const Filter = ({ onChange, inputValue }) => {
  return (
    <div>
      <label htmlFor="filter" className="form-label">
        Search by name
        <input
          type="text"
          className="input"
          placeholder="Search country"
          value={inputValue}
          name="filter"
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Filter;
