import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = ({ characters, onDelete, onEdit }) => {
  return (
    <div className="character-list">
      {characters.map((character, index) => (
        <CharacterCard
          key={character.id}
          character={character}
          onDelete={onDelete}
          onEdit={onEdit}
          positionInRow={(index % 4) + 1}
        />
      ))}
    </div>
  );
};

export default CharacterList;
