import React from "react";
import StarWarsLogo from "../images/starWars-logo.jpg";

export default function Homepage() {
  return (
    <>
      <p>Hello world!</p>
      <img src={StarWarsLogo} alt="Star Wars Logo" className="starWarsLogo" />
    </>
  );
}
