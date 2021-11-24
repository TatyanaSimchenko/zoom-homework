import React, { useState } from "react";
import "./searchInput.css";

const SearchInput = ({ handleInputChange }) => {
  const [value, setValue] = useState(" ");

  const changeInput = (e) => {
    setValue(e.target.value);
    handleInputChange(e.target.value);
  };
  return (
    <div className="field__search">
      <input
        className="field__input"
        type="text"
        onChange={changeInput}
        placeholder="Шукати..."
      />
    </div>
  );
};

export default SearchInput;
