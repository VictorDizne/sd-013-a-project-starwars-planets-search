import React, { useCallback, useEffect, useState } from 'react';
import Filtros from './Components/filtros';
import Table from './Components/Table';
import Context from './Context/Context';
import getStarwars from './serviceApi';

function App() {
  const [filtros, setFiltros] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
    ],
  });
  const [stateLocal, setLocal] = useState({
    filter: [],
    drop: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
  });
  const [dados, setData] = useState();

  useEffect(() => {
    getStarwars().then((response) => {
      const { results } = response;
      setData({ data: results });
    });
  }, []);
  const TesteColum = useCallback((filtrado, filterByNumericValues) => {
    if (filterByNumericValues > 0) {
      filterByNumericValues.foreach((value) => {
        filtrado.foreach((fill) => {
          switch (value.column) {
          case 'MAIOR QUE':
            console.log(fill);
            break;

          default:
            break;
          }
        });
      });
    } else {
      return filtrado;
    }
  }, []);

  useEffect(() => {
    if (dados) {
      const { filterByName, filterByNumericValues } = filtros;
      const Filtrado = dados.data.filter((planeta) => planeta.name
        .includes(filterByName.name));
      const teste = TesteColum(Filtrado, filterByNumericValues);
      setLocal((prev) => ({ ...prev, filter: Filtrado }));
    }
  }, [TesteColum, dados, filtros]);
  const VALORES = {
    stateLocal,
    setFiltros,
  };
  return (
    <Context.Provider value={ VALORES }>
      <Filtros />
      <Table />
    </Context.Provider>
  );
}
export default App;
