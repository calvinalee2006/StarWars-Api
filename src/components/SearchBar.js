import axios from "axios";
import React, { useEffect, useState } from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "", //Store user query results
      results: {}, // grabbing the results from the api
      loading: false, //Shows loading message when loading pictures.
      message: "", //Just in case search fails.
    };
  }
  // `https://swapi.dev/api/people/?search=${searchTerm}`;
  render() {
    return (
      <>
        <div className="container">
          <label className="search-label" htmlFor="search-input">
            <input
              type="text"
              value=""
              id="search-input"
              placeholder="Search your character"
            />
            <i class="fa fa-search" aria-hidden="true" />
          </label>
        </div>
      </>
    );
  }
}

export default SearchBar;
