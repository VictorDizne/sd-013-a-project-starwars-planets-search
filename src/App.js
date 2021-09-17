import React from 'react';
import './App.css';
import { Table, Filter } from './components';
import Provider from './context/Provider';

function App() {
  return (
    <div>
      <Provider>
        <Filter />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
