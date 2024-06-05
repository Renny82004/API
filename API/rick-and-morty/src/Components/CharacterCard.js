import React from 'react';

const CharacterCard = ({ character, onDelete, onEdit }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} style={{width: '125px'}} />
      <h3>{character.name}</h3>
      <div className="buttons-container">
        <button onClick={() => onEdit(character)}>Edit</button>
        <button onClick={() => onDelete(character.id)}>Delete</button>
      </div>
    </div>
  );
};

export default CharacterCard;
