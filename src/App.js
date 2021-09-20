import React from 'react';
import './App.css';
import Filters from './components/filters';
import TableItems from './components/table';
import ApiProvider from './contexts/apiProvider';

function App() {
  return (
    <div>
      <ApiProvider>
        <Filters />
        <TableItems />
      </ApiProvider>
    </div>
  );
}

export default App;
