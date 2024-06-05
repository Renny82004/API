import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';
import CharacterList from './Components/CharacterList';
import CharacterForm from './Components/CharacterForm';

function App(){
  const [characters, setCharacters] = useState([]);
  const [characterToEdit, setCharactersToEdit] = useState(null);
  
  useEffect(()=> {
    Axios.get('https://rickandmortyapi.com/api/character')
    .then(response =>{
      setCharacters(response.data.results);
    })
    .catch(console.error());
  })

const handleDelete = (id) => {
  setCharacters(characters.filter(character => character.id !== id));
};
const handeleEdit = (character)=> {
  setCharactersToEdit(character);
};
const handleSave = (character)=> {
  if (character.id){
    setCharacters(characters.map(c => (c.id === character.id ? character : c)));

  }else{
    character.id = characters.lenght + 1;
    setCharacters([characters, character]);
  }
  setCharactersToEdit(null);
};

  return (
    <div className="App">
    
      <header className="App-header">
        <h1> API Rick and Morty</h1>
      </header>
      <main>
        <CharacterForm character={characterToEdit} onSave={handleSave}/>
        <CharacterList characters={characters} onDelete={handleDelete} onEdit={handeleEdit}/> 
      </main>
    </div>
  );
}

export default App;
