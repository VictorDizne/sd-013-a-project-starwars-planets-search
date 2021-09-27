import React, { useCallback, useEffect, useState } from 'react';
import Column from './Components/Column';
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
    if (filterByNumericValues.length > 0) {
      const Vazio = [];
      filterByNumericValues.forEach((Numeric) => {
        filtrado.forEach((fill) => {
          switch (Numeric.comparison) {
          case 'MAIOR QUE':
            // if (+fill[Numeric.column] > +Numeric.value  ) {
            //   Vazio.push(fill);
            // }
            break;
          case 'IGUAL A':
            if (+Numeric.value === +fill[Numeric.column]) {
              Vazio.push(fill);
            }
            break;
          case 'MENOR QUE':
            if (+fill[Numeric.column] < +Numeric.value) {
              Vazio.push(fill);
            }
            break;
          default:
          }
        });
      });
      return Vazio.filter((item, index) => Vazio.indexOf(item) === index);
    }
    return filtrado;
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
