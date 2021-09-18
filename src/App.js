import React from 'react';
import './App.css';
import Provider from './components/Provider';
import Table from './Pages/Table';

function App() {
  return (
    <Provider>
      <div>
        <Table />
      </div>
    </Provider>
  );
}

export default App;
