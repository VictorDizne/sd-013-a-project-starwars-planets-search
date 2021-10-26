import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './Components/Table';
import Form from './Components/Form';
import RemoveList from './Components/RemoveList';
import Sort from './Components/Sort';

// Requisitos 1,2 realizados com a ajuda de Leonardo
// Requisito 3 com  ajuda de Rafa Martins
// Requisitos 5 e 6 com ajuda dos códigos de
// Matheus Duarte https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/122/files
// Isabella-a https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/95/files
// Micael-M https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/120/files
// e Rafael Victor https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/119/files

function App() {
  return (
    <Provider>
      <Form />
      <Sort />
      <RemoveList />
      <Table />
    </Provider>
  );
}

export default App;
