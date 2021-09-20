import React from 'react';
import './App.css';
import Table from './Components/Table';
import Provider from './Context/Provider';

function App() {
  return (
    <>
      <span>PROJETO STAR WARS</span>
      <Provider>
        <Table />
      </Provider>
    </>
  );
}

export default App;
