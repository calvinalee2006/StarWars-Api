import { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import SearchBar from "./components/SearchBar";
import Tabledata from "./components/Tabledata";

export default function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((json) => setCharacterList(json.results));
  }, []);

  return (
    <>
      <Homepage />
      <SearchBar />
      <Tabledata characterList={characterList} />
    </>
  );
}
