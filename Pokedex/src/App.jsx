// App.jsx
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <Header />
      <Pokedex />
    </div>
  );
}

export default App;
