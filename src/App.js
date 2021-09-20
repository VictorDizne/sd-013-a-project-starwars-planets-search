import React, { useState, useEffect /* useRef */ } from 'react';
import './App.css';
import Filtros from './Components/filtros';
import Table from './Components/Table';
import Context from './Context/Context';
import getStarwars from './serviceApi';

function App() {
  const [requi, setRequi] = useState(false);
  const [local, setLocal] = useState(false);
  const [dropState] = useState({
    Drop: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
    comparison: [
      'maior que',
      'menor que',
      'igual a',
    ],
  });
  useEffect(() => {
    getStarwars().then((data) => {
      const { results } = data;
      setRequi((prev) => ({ ...prev, dados: results }));
    });
  }, []);
  const [stateFilter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [

      ],
    },
  });
  const ProcuraName = (valor) => {
    setFilter((prev) => ({ ...prev,
      filters: {
        ...prev.filters,
        filterByName: {
          ...prev.filters.filterByName,
          name: valor,
        },
        filterByNumericValues: [
          ...prev.filters.filterByNumericValues,
        ],
      } }));
  };
  useEffect(() => {
    const { dados } = requi;
    if (dados) {
      const { filters: { filterByName: { name } } } = stateFilter;
      const filName = dados.filter((dado) => (
        dado.name.includes(name)
      ));
      console.log('setLocal');
      setLocal((prev) => ({ ...prev, filName }));
    }
  }, [requi, stateFilter]);

  useEffect(() => {
    const { filters: { filterByNumericValues } } = stateFilter;
    const { Drop, comparison } = dropState;
    const acumulador = [];
    filterByNumericValues.forEach((value) => {
      Drop.forEach((Dropinho) => {
        if (Dropinho === value.column) {
          acumulador.push(Dropinho);
        }
      });
    }); /* source: https://pt.stackoverflow.com/questions/235101/comparar-2-arrays-e-salvar-a-diferen%C3%A7a-entre-eles-no-banco-de-dados */
    const x = Drop.filter((item) => !acumulador
      .includes(item));
    setLocal((prev) => ({ ...prev, x, comparison }));
  }, [dropState, stateFilter]);

  const teste = {
    ProcuraName,
    local,
  };

  return (
    <Context.Provider value={ teste }>
      <span>Hello, App!</span>
      <Filtros />
      <Table />
    </Context.Provider>
  );
}

export default App;
