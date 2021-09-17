import React from 'react';
import './App.css';
import PlanetTable from './Components/PlanetTable';
import PlanetFilter from './Components/PlanetFilter';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <PlanetFilter />
      <PlanetTable />
    </Provider>
  );
}

export default App;
