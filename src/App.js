import React from 'react';
import './App.css';
import FilterNumeric from './components/FilterNumeric';
import InputFilter from './components/InputFilter';
import RemoveFilter from './components/RemoveFilter';
import Table from './components/Table';
import ProviderPlanet from './contexts/ProviderPlanet';
// Req 1 foi feito consulta no PR do Colega Matheus Duarte:
// https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/122

// Reqs: 2, 3 e 4 Foram feito com ajuda da colega Sthefany, que cedeu um pouco do seu tempo para
// me ajudar atenciosamente PR dela: https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/60

// Reqs: 5 e 6 foram feitos  por consulta ao PR da colega Isabella de PR:
// https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/95

function App() {
  return (
    <ProviderPlanet>
      <FilterNumeric />
      <InputFilter />
      <RemoveFilter />
      <Table />
    </ProviderPlanet>
  );
}

export default App;
