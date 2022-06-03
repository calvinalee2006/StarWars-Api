import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import Tabledata from "./components/Tabledata";


export default function App() {
  const [characterList, setCharacterList] = useState([]);
  const [characterName, setCharacterName] = useState("");

  function handleChange(e) {
    setCharacterName();
  }

  useEffect(() => {
    getCharacters("https://swapi.dev/api/people/");
  }, []);

  const getCharacters = (url) => {
    axios.get(url).then((response) => {
      let characters = response.data.results;
      console.log("characters:", characters);

      characters = Promise.all(
        characters.map(async (character) => {
          character.homeworld = await getHomeworld(character.homeworld);
          if (!character.species[0]) {
            character.species = "Human";
          } else character.species = await getSpecies(character.species);
          return character;
        })
      );
      characters.then((characters) => {
        console.log(characters);
        setCharacterList(characters);
      });
    });
  };

  //helper functions
  const getHomeworld = async (homeworldURL) => {
    const response = await axios.get(homeworldURL);
    return response.data.name;
  };

  const getSpecies = async (speciesURL) => {
    const response = await axios.get(speciesURL);
    return response.data.name;
  };

  return (
    <>
      <form className="characterForm">
        <label htmlFor="characterSearch">Character Search</label>
        <input
          type="text"
          name=" characterName"
          id="name"
          value={characterName}
          onChange={handleChange}
        />
      </form>
      <Tabledata characterList={characterList} />
    </>
  );
}
