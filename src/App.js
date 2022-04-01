import React from "react";
import ApiInfo from "./components/ApiInfo";
import Homepage from "./components/Homepage";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <>
      <Homepage />
      <SearchBar placeholder="Enter Character" data={ApiInfo} />
      {/* <ApiInfo /> */}
    </>
  );
}
