import React from 'react';
import Provider from './context/Provider';
import Table from './component/Table';
import SearchBar from './component/SearchBar';

function App() {
  return (
    <div>
      <Provider>
        <SearchBar />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
