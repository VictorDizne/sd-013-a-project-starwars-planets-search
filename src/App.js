import React from 'react';
import Provider from './context/Provider';
import './App.css';

import Table from './Table';

function App() {
  return (
    <main>
      <Provider>
        <Table />
      </Provider>
    </main>
  );
}

export default App;
