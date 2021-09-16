import React, { useContext, useEffect } from 'react';
import './App.css';
import Context from './context/index';
import Table from './components/Table';
import Provider from './context/Provider';
// import useFetch from './hooks/useFetch';

function App() {

  return (
    <Provider>
      <Table />
    </Provider>

  );
}

export default App;
