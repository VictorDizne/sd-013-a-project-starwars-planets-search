import React from 'react';
import './App.css';
import Tabela from './componentes';
import Provider from './context/Provider';

function App() {
  return (
    <div>
      <Provider>
        <Tabela />
      </Provider>
    </div>
  );
}

export default App;
