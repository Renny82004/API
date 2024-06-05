import React, { useState, useEffect } from 'react';

const CharacterForm = ({ characterToEdit, onSave }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (characterToEdit) {
      setName(characterToEdit.name);
      setImage(characterToEdit.image);
    }
  }, [characterToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()){
      alert("Debe ingresar un nombre.");
      return;
    }
    onSave({ id: characterToEdit ? characterToEdit.id :  null, name, image });
    setName('');
    setImage('');
  };

return (
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Character Name:"
    />
    <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Url image:"
    />
    <button type="submit">Guardar</button>
    </form>
  );
};

export default CharacterForm;

