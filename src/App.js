import { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import SearchBar from "./components/SearchBar";
import Tabledata from "./components/Tabledata";
import axios from "axios";

export default function App() {
  const [characterList, setCharacterList] = useState([]);

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
      <Homepage />
      <SearchBar />
      <Tabledata characterList={characterList} />
    </>
  );
}
