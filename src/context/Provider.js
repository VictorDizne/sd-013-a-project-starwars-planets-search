import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchPlanets from '../data';
import MyContext from './MyContext';

function isNumeric(str) {
  return /^\d+$/.test(str);
}

const ONE = 1;

function Provider({ children }) {
  const [useData, setUseData] = useState([]); // Nesse estado é armazenado a resposta da API
  const [dataTable, setDataTable] = useState({});
  const [valueInput, setValueInput] = useState('');
  const [buttonFilter, setButtonFilter] = useState([]); // Nesse estado é armazenado os dados de "column, comparison, value" que o usuário selecionou  depois clicou no button "Filtrar" (component InputNumber)
  const [options, setOptions] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );
  const [sortFilters, setSortFilters] = useState(
    {
      order: {
        column: 'name',
        sort: 'ASC',
      },
    },
  );
  const [orderOptions, setOrderOptions] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

  useEffect(() => {
    async function getAPI() {
      const results = await fetchPlanets();
      setUseData(results);
      setDataTable(results[0]);
    }
    getAPI();
  }, []);

  // Essa função é utillizada no component "InputSearch"
  function handleChange({ target: { value } }) {
    setValueInput(value);
  }

  // Essa função é utilizada no component "InputNumber". A partir do momento que o usuário clica no botão "Filtrar", ela é acionada e salva os filtros dentro do estado "buttonFilter"
  // OBS: O QUE O setOptions faz aí?
  function handleChangeFilters(filters) {
    setButtonFilter([...buttonFilter, filters]);
    const select = document.getElementById('column-filter-id');
    const option = select.options[select.selectedIndex].value;
    const filterOptions = options.filter((opt) => option !== opt);
    setOptions(filterOptions);
  }

  // Essa função é utilizada no component InputNumber. Ela remove o filtro, quando o usuário clica no button "X", filtro esse que o usuário selecionou quando clicou no botão "Filtrar"
  function removeFilter(columnToRemove) {
    const filterRemove = buttonFilter.filter(({ column }) => columnToRemove !== column);
    setButtonFilter(filterRemove);
    setOptions([...options, columnToRemove]);
  }

  function orderByColumn(arr) {
    const { order } = sortFilters;
    const { column, sort } = order;
    if (isNumeric(useData[0][column])) {
      return arr.sort((a, b) => {
        if (sort === 'DESC') return b[column] - a[column];
        return a[column] - b[column];
      });
    }
    return arr.sort((a, b) => {
      if (a[column] > b[column]) {
        return sort === 'ASC' ? ONE : -ONE;
      }
      if (b[column] > a[column]) {
        return sort === 'ASC' ? -ONE : ONE;
      }
      return 0;
    });
  }

  // Constante criada para armazenar todos os estados e funções que serão utilizadas nos demais componentes da aplicação, atráves do "Provider" e do "Context"
  const contextValue = {
    useData,
    dataTable,
    valueInput,
    handleChange,
    buttonFilter,
    handleChangeFilters,
    options,
    removeFilter,
    sortFilters,
    setSortFilters,
    orderOptions,
    setOrderOptions,
    orderByColumn,
  };

  return (
    // Sintaxe do "Provider"
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
