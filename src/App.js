import React from 'react';
import Home from './pages/Home';
import Provider from './context/Provider';

function App() {
  return (

    <Provider>
      <Home />
    </Provider>
  );
}

export default App;

// Sources:
// https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/139/
// Repositório da Elaine 13A
// Auxílio do Lima Lima
