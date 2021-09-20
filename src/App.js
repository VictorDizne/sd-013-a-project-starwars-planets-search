import React from 'react';
import Home from './pages/Home';
import Provider from './context/Provider';
import './App.css';

// Projeto feito com auxilio de Gesse Carlos e Emanoel Mattos, fizemos ao mesmo tempo por Discord.
// https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/57

function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
