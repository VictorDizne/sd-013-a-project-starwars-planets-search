import React from 'react';
import StarWarsPlanetsProvider from './context/StarWarsPlanetsProvider';
import Table from './components/Table';

// Projeto feito com a ajuda de Felipe Neves e Douglas Drozda

function App() {
  return (
    <StarWarsPlanetsProvider>
      <Table />
    </StarWarsPlanetsProvider>
  );
}

export default App;
