import React from 'react';
import './App.css';
import PlanetTable from './Components/PlanetTable';
import PlanetFilter from './Components/PlanetFilter';
import Provider from './context/Provider';
// 1 - inicio: aqui os dois componentes são chamados.
function App() {
  return (
    <div>
      <Provider>
        <PlanetFilter />
        <PlanetTable />
      </Provider>
    </div>
  );
}

export default App;
