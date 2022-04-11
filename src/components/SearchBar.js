import React, { useState } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState([]);

  // `https://swapi.dev/api/people/?search=${searchTerm}`;

  return (
    <form action="/" method="get">
      <label htmlFor="header-search">
        <span className="visually-hidden">Search characters</span>
      </label>
      <input type="text" id="header-search" placeholder="Search Characters" />
      <button type="submit">Search</button>
    </form>
  );
}
