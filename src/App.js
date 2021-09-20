import React from 'react';
import Provider from './context/Provider';
import './App.css';

import Table from './components/Table';
import SearchByName from './components/SearchByName';
import SearchByNumericValue from './components/SearchByNumericValue';
import FilterButton from './components/FilterButton';
import OrderPlanet from './components/OrderPlanet';

function App() {
  return (
    <Provider key="provider">
      <div style={ { display: 'flex', flexDirection: 'column' } }>
        <SearchByName />
        <SearchByNumericValue />
        <OrderPlanet />
      </div>
      <FilterButton />
      <Table key="table" />
    </Provider>
  );
}

export default App;
