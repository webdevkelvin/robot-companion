/* eslint-disable react/prop-types */

import "./SearchBox.css";

function SearchBox({ className, placeholder, onChangeHandler }) {
  return (
    <input
      type="search"
      className={`search-box ${className}`}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
}

export default SearchBox;
