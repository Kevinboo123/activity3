// Pokemon.jsx
import React, { useState } from 'react';

function Pokemon({ pokemon }) {
  const [language, setLanguage] = useState('english');

  const handleLanguageChange = lang => {
    setLanguage(lang);
  };

  return (
    <div className="pokemon">
      <img src={pokemon.image} alt={pokemon.name.english} />
      <p>ID: {pokemon.id}</p>
      <p>Name: {pokemon.name[language]}</p>
      <p>Type: {pokemon.type.join(', ')}</p>
      <p>HP: {pokemon.base.HP}</p>
      <p>Attack: {pokemon.base.Attack}</p>
      <p>Defense: {pokemon.base.Defense}</p>
      <p>Special Attack: {pokemon.base['Sp. Attack']}</p>
      <p>Special Defense: {pokemon.base['Sp. Defense']}</p>
      <p>Speed: {pokemon.base.Speed}</p>
      <div className="language-buttons">
        <button onClick={() => handleLanguageChange('english')}>English</button>
        <button onClick={() => handleLanguageChange('japanese')}>Japanese</button>
        <button onClick={() => handleLanguageChange('chinese')}>Chinese</button>
        <button onClick={() => handleLanguageChange('french')}>French</button>
      </div>
    </div>
  );
}

export default Pokemon;
