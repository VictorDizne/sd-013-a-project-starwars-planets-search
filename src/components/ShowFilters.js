import React, { useContext } from 'react';

import ApiContext from '../context/ApiContext';
import filtersStructure from '../services/filter';

function App() {
  const { filters, setFilters } = useContext(ApiContext);
  return (
    <div>
      <p>{JSON.stringify(filters)}</p>
      <button type="button" onClick={ () => setFilters(filtersStructure) }> X </button>
    </div>
  );
}

export default App;
