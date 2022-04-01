import React from "react";

export default function SearchBar() {
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" />
        <div className="searchIcon"></div>
      </div>
      <div className="dataResult"></div>
    </div>
  );
}
