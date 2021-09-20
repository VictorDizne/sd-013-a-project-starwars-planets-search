import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

export const DataContext = React.createContext();
export const FilterContext = React.createContext();

// função criada com base na resposta https://stackoverflow.com/a/1779019
export function isNumeric(str) {
  return /^\d+$/.test(str);
}

export default function DataProvider({ children }) {
  const initialRender = useRef(true); // auxiliar usado para impedir a primeira iteração do useEffect acionada pelo [filter].
  const backup = useRef([]); // backup data. Para não perder nas filtragens
  const [data, setData] = useState();
  const [films, setFilms] = useState();
  const [isReady, setIsReady] = useState(false);
  const [columns, setColumns] = useState([]); // armazenar columns de dados numéricos
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });
  // https://swapi.dev/api/planets/ endpoint reserva
  useEffect(() => { // componentDidMount - set data, columns e isReady
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((json) => {
        setData(json.results);
        backup.current = json.results;
        setColumns(
          Object.entries(backup.current[0])
            .map(([key, value]) => {
              if (isNumeric(value)) {
                return key;
              }
              return '';
            })
            .filter((column) => column !== ''),
        );
        fetch('https://swapi-trybe.herokuapp.com/api/films/') // requisiçao para criar dicionário dos filmes, usando url como key.
          .then((response) => response.json())
          .then((filmsJson) => {
            setFilms(
              filmsJson.results // cria objeto com url dos films como key.
                .reduce((a, v) => ({
                  ...a, [v.url]: `${v.title} - Episode ${v.episode_id}`,
                }), {}),
            );
            setIsReady(true);
          });
      });
  }, []);

  useEffect(() => { // updata quando filters é alterado. Usa initialRender para impedir primeira iteração.
    if (!initialRender.current) {
      const { name } = filters.filterByName;
      const { filterByNumericValues } = filters;
      setData(() => {
        let newData = [...backup.current
          .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()))];
        filterByNumericValues.forEach((filter) => {
          const { comparison, value, column } = filter;
          newData = newData.filter((planet) => {
            switch (comparison) {
            case 'maior que':
              return Number(planet[column]) > Number(value);
            case 'menor que':
              return Number(planet[column]) < Number(value);
            case 'igual a':
              return planet[column] === value;
            default:
              return null;
            }
          });
        });
        return newData;
      });
    } else {
      initialRender.current = false;
    }
  }, [filters]);

  function removeColumn(filterByNumericValues) { // remove colunas já adicionadas na filtragem.
    filterByNumericValues.forEach((filter) => {
      const { column } = filter;
      setColumns(() => columns.filter((key) => key !== column));
    });
  }

  function removeFilter(column) {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues.filter((filter) => filter.column !== column),
      ],
    });
  }

  return (
    <FilterContext.Provider
      value={ { filters, setFilters, columns, removeColumn, removeFilter } }
    >
      <DataContext.Provider value={ { data, isReady, backup, films } }>
        {children}
      </DataContext.Provider>
    </FilterContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
