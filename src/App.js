import React from 'react';
import './App.css';
import Tabela from './componentes';
import Provider from './context/Provider';
import Filter from './componentes/Filter';

function App() {
  return (
    <div>
      <Provider>
        <Filter />
        <Tabela />
      </Provider>
    </div>
  );
}

export default App;
