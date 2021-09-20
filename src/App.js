import React from 'react';
import './App.css';
import ButtonFilter from './components/ButtonFilter';
import Filter from './components/Filter';
import Table from './components/Table';

import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <form>
        <Filter />
        <Table />
        <ButtonFilter />
      </form>
    </Provider>);
}

export default App;
