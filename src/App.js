import React from 'react';
import './App.css';
import { Table, Header } from './components';
import Provider from './context/Provider';

// Tive ajuda do Gessé
// https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/57
function App() {
  return (
    <Provider>
      Hello, Brasil!
      <Header />
      <Table />
    </Provider>
  );
}

export default App;
