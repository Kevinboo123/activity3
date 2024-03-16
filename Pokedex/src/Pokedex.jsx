// Pokedex.jsx
import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';

function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon')
      .then(response => response.json())
      .then(data => setPokemonList(data));
  }, []);

  return (
    <div className="pokedex">
      {pokemonList.map(pokemon => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default Pokedex;