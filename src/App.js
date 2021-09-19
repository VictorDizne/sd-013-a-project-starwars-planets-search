import React from 'react';
import Provider from './context/Provider';
import './App.css';

import Table from './components/Table';
import SearchByName from './components/SearchByName';
import SearchByNumericValue from './components/SearchByNumericValue';

function App() {
  return (
    <main>
      <Provider>
        <div style={ { display: 'flex', flexDirection: 'column' } }>
          <SearchByName />
          <SearchByNumericValue />
        </div>
        <Table />
      </Provider>
    </main>
  );
}

export default App;
