import React, { useEffect, useState, children } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
// REFERENCE https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

function Provider() {
  const [dataPlanets, setdataPlanets] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
      order: {
        column: 'name',
        sort: 'ASC',
      },
    },
  });

  const columnText = ['name', 'terrain', 'films', 'url'];
  const { column, sort } = filter.filters.order;
  if (sort === 'ASC') {
    if (columnText.includes(column)) {
      data.sort((a, b) => (
        +(a[column] > b[column]) || +(a[column] === b[column]) - 1
      ));
    } else {
      data.sort((a, b) => Number(a[column]) - Number(b[column]));
    }
  } else if (sort === 'DESC') {
    if (columnText.includes(column)) {
      data.sort((a, b) => (
        +(a[column] < b[column]) || +(a[column] === b[column]) - 1
      ));
    } else {
      data.sort((a, b) => Number(b[column]) - Number(a[column]));
    }
  }

  let arrayData = data.reduce((__, acc) => acc, []);
  arrayData = Object.keys(arrayData).filter((key) => key !== 'residents');

  async function setPlanets() {
    try {
      const response = await fetchApi();
      setData(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setPlanets();
    setColumns(['population',
      'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  }, []);

  const exportData = {
    filter,
    dataPlanets,
    dataFilter,
    setFilter,
    setdataPlanets,
    setName,
    setColumn,
    setComparison,
    setValue,
  };

  return(
    <Context.Provider value={ exportData }>
      { children }
    </Context.Provider>
  )
}


export default Provider;

Provider.propsTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
}
