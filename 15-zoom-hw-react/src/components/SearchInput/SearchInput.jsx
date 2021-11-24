import React, { useState } from "react";

const SearchInput = ({ handleInputChange }) => {
  const [value, setValue] = useState("");

  const changeInput = (e) => {
    setValue(e.target.value);
    handleInputChange(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={changeInput} />
    </div>
  );
};

export default SearchInput;
