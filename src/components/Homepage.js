import React from "react";
import StarWarsLogo from "../images/starWars-logo.jpg";

export default function Homepage() {
  return (
    <>
      <img src={StarWarsLogo} alt="Star Wars Logo" className="starWarsLogo" />
    </>
  );
}
