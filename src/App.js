import { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import SearchBar from "./components/SearchBar";
import Tabledata from "./components/Tabledata";

export default function App() {
  const [characterList, setCharacterList] = useState([]);
  const [homeWorld, setHomeWorld] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((json) => setCharacterList(json.results));
  }, []);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/")
      .then((res) => res.json())
      .then((json) => setHomeWorld(json.results));
  }, []);

  return (
    <>
      <Homepage />
      <SearchBar />
      <Tabledata characterList={characterList} homeWorld={homeWorld} />
    </>
  );
}
