import React from 'react';
import StarWarsPlanetsProvider from './context/StarWarsPlanetsProvider';
import Table from './components/Table';

function App() {
  return (
    <StarWarsPlanetsProvider>
      <Table />
    </StarWarsPlanetsProvider>
  );
}

export default App;
