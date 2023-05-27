import React from "react";
import { useParams, useHistory } from "react-router-dom";

const CharacterDetails = ({ characters }) => {
  const { id } = useParams();
  const history = useHistory();

  const character = characters.find((character) => character.id === id);

  const handleGoBack = () => {
    history.goBack();
  };

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{character.name}</h2>
      <p>Species: {character.species}</p>
      <p>Location: {character.location.name}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default CharacterDetails;
