import React from 'react';
import Provider from './context/Provider';
import './App.css';

import Table from './components/Table';
import SearchByName from './components/SearchByName';
import SearchByNumericValue from './components/SearchByNumericValue';
import FilterButton from './components/FilterButton';

function App() {
  return (
    <Provider>
      <div style={ { display: 'flex', flexDirection: 'column' } }>
        <SearchByName />
        <SearchByNumericValue />
      </div>
      <FilterButton />
      <Table />
    </Provider>
  );
}

export default App;
