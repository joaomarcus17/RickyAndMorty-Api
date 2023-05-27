import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Navbar from "./components/Navbar";
import CharacterList from "./components/CharacterList";
import CharacterDetails from "./components/CharacterDetails";

function App() {
  const [characters, setCharacters] = useState([]);

  const [info, setInfo] = useState({});
  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    axios
      .get(url)
      .then((data) => {
        setCharacters(data.data.results);
        setInfo(data.data.info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNextPage = () => {
    if (info.next) {
      fetchCharacters(info.next);
      window.scrollTo(0, 0);
    }
  };

  const handlePreviousPage = () => {
    if (info.prev) {
      fetchCharacters(info.prev);
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  return (
    <Router>
      <Navbar brand="" />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <CharacterList
                characters={characters}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                info={info}
              />
            </>
          }
        />
        <Route
          path="/character/:id"
          element={<CharacterDetails characters={characters} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
