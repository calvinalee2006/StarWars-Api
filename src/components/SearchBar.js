// import axios from "axios";
import React, { useState } from "react";

export default function SearchBar() {
  const [characterName, setCharacterName] = useState("");

  function handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  return (
    <>
      <form className="characterForm">
        <label htmlFor="characterSearch">Character Search</label>
        <input
          type="text"
          name=" characterName"
          id="name"
          onChange={this.handleChange}
        />
      </form>
    </>
  );
}
