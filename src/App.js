import React from 'react';
import Provider from './context/Provider';
import Table from './component/Table';
import SearchBar from './component/SearchBar';
import FilterValues from './component/FilterValues';

function App() {
  return (
    <div>
      <Provider>
        <SearchBar />
        <FilterValues />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
