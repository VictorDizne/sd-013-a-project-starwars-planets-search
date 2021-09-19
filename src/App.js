import React from 'react';
import Filters from './components/Filters';
import StarWarsPlanetsTable from './components/StarWarsPlanetsTable';
import StarWarsPlanetsProvider from './context/StarWarsPlanetsProvider';

function App() {
  return (
    <div>
      <StarWarsPlanetsProvider>
        <Filters />
        <StarWarsPlanetsTable />
      </StarWarsPlanetsProvider>
    </div>
  );
}

export default App;
