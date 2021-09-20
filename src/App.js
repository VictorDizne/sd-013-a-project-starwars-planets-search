import React from 'react';
import './App.css';
import TableItems from './components/table';
import ApiProvider from './contexts/apiProvider';

function App() {
  return (
    <div>
      <ApiProvider>
        <TableItems />
      </ApiProvider>
    </div>
  );
}

export default App;
