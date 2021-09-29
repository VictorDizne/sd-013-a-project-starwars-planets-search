import React, { useCallback, useEffect, useState } from 'react';
import Column from './Components/Column';
import Filtros from './Components/filtros';
import Table from './Components/Table';
import Context from './Context/Context';
import getStarwars from './serviceApi';

function App() {
  const [dados, setData] = useState();
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

  useEffect(() => {
    getStarwars().then((response) => {
      const { results } = response;
      setData({ data: results });
    });
  }, []);
  const TesteColum = useCallback((filtrado, filterByNumericValues) => {
    if (filterByNumericValues.length > 0) { // feito com ajuda do Gabriel Biasoli
      const recebeFilter = filterByNumericValues.reduce((acc, Numeric) => {
        const valueFilter = acc.filter((fill) => {
          if (Numeric.comparison === 'maior que') {
            return +fill[Numeric.column] > +Numeric.value;
          }
          if (Numeric.comparison === 'igual a') {
            return +Numeric.value === +fill[Numeric.column];
          }
          return +fill[Numeric.column] < +Numeric.value;
        });
        return valueFilter;
      }, filtrado);
      return recebeFilter;
    }
    return filtrado;
  }, []);

  useEffect(() => {
    if (dados) {
      const { filterByName, filterByNumericValues } = filtros;
      const Filtrado = dados.data.filter((planeta) => planeta.name
        .includes(filterByName.name));
      const teste = TesteColum(Filtrado, filterByNumericValues);
      console.log(teste);
      setLocal((prev) => ({ ...prev, filter: teste }));
    }
  }, [TesteColum, dados, filtros]);

  useEffect(() => {
    const Dropinho = ['population', 'orbital_period', 'diameter',
      'rotation_period', 'surface_water'];
    const newDrop = Dropinho.filter((element) => (
      !filtros.filterByNumericValues.some((Numeric) => (
        Numeric.column === element
      ))
    ));
    setLocal((prev) => ({ ...prev, drop: newDrop }));
  }, [filtros]);
  const VALORES = {
    stateLocal,
    setFiltros,
    filtros,
  };
  return (
    <Context.Provider value={ VALORES }>
      <Filtros />
      <Column />
      <Table />
    </Context.Provider>
  );
}
export default App;
