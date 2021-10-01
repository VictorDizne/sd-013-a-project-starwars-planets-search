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
    order: {
      column: 'name',
      sort: 'ASC',
    },
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
      results.forEach((r) => delete r.residents);
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
  const maior = (teste, column) => {
    const numeber = -1;
    teste.sort((a, b) => {
      if (a[column] > b[column]) return 1;
      if (a[column] < b[column]) return numeber;
      return 0;
    });
  };
  const orderFilter = useCallback((teste, order) => {
    const numeber = -1;
    const { column, sort } = order;
    if (sort === 'ASC') {
      if (['name', 'terrain', 'climate'].includes(column)) {
        maior(teste, column);
      } else teste.sort((a, b) => (a[column] - b[column]));
    } else if (['name', 'terrain', 'climate'].includes(column)) {
      teste.sort((a, b) => {
        if (a[column] < b[column]) return 1;
        if (a[column] > b[column]) return numeber;
        return 0;
      });
    } else {
      teste.sort((a, b) => (+b[column] - +a[column]));
    }
  }, []);

  useEffect(() => {
    if (dados) {
      const { filterByName, filterByNumericValues, order } = filtros;
      const Filtrado = dados.data.filter((planeta) => planeta.name
        .includes(filterByName.name));
      const teste = TesteColum(Filtrado, filterByNumericValues);
      orderFilter(teste, order);
      setLocal((prev) => ({ ...prev, filter: teste }));
    }
  }, [TesteColum, dados, filtros, orderFilter]);

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
