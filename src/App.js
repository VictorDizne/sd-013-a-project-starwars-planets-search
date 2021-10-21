import React from 'react';
import Provider from './context/Provider';
import './App.css';
import Table from './components/Table';
import FilterByName from './components/FilterByName';
import FilterByNumericValue from './components/FilterByNumericValue';
import ExcludeNumericFilterButton from './components/ExcludeNumericFilterButton';
import OrderPlanets from './components/OrderPlanets';

function App() {
  return (
    <Provider>
      <div
        style={ { backgroundColor: 'rgba(240, 240, 240, 0.8)',
          display: 'flex',
          flexFlow: 'column',
          height: '8em',
          margin: '0',
          justifyContent: 'space-evenly',
          paddingLeft: '2em' } }
      >
        <FilterByName />
        <FilterByNumericValue />
        <OrderPlanets />
        <ExcludeNumericFilterButton />
      </div>
      <div style={ { padding: '1em' } }>
        <Table />
      </div>
    </Provider>
  );
}

export default App;
