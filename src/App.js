import React from 'react';
import './App.css';
import PlanetTable from './Components/PlanetTable';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <PlanetTable />
    </Provider>
  );
}

export default App;
