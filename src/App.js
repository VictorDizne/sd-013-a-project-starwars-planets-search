import React from 'react';
import './App.css';
import Table from './components/Table';
import StarWarsProvider from './components/Provider';

function App() {
  return (
    <StarWarsProvider>
      <Table />
    </StarWarsProvider>
  );
}

export default App;
