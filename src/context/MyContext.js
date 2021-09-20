import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

const MyProvider = ({ children }) => {
  const INITIAL_VALUE = {
    filters: {
      filterByName: {
        name: 'State input',
      },
      filterByNumericValues: [
        {
          column: 'a',
          comparison: 'b',
          value: String('c'),
        },
      ],
    },
  };

  const [data, setData] = useState([]);
  const [saveFilter, setSaveFilter] = useState(INITIAL_VALUE);
  const [filterByNumericValues] = useState([]);
  const [filters, setFilters] = useState(
    { filterByName: { name: '' },
      filterByNumericValues: [{
        filters: {
          filterByName: {
            name: 'oi',
          },
          filterByNumericValues: [
          ],
        },
      }] },
  );
  const [column, setColum] = useState('population');
  const [comparison, setComparison] = useState('diameter');
  const [value, setValue] = useState(0);
  const [change, setChange] = useState('');

  const [dropdonw, setDropdonw] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);

  const handleOnClickState = (param1, param2, param3) => {
    setDropdonw([...dropdonw.filter((item) => item !== param1)]);
    setFilters({ ...filters, filterByNumericValues: [{ param1, param2, param3 }] });
    const fazOSwitch = () => {
      switch (comparison) {
      case 'maior que':
      { const result = data.filter((item) => Number(item[column]) > Number(value));
        setData(result);
        break; }
      case 'menor que':
      { const result = data.filter((item) => Number(item[column]) < Number(value));
        setData(result);
        break; }
      case 'igual a':
      { const result = data.filter((item) => Number(item[column]) === Number(value));
        setData(result);
        break; }
      default:
      { const result = data;
        setData(result); }
      }
    };
    fazOSwitch();
    filterByNumericValues.push({
      column,
      comparison,
      value,
    });

    setSaveFilter({ ...saveFilter,
      filters: {
        filterByName: {
          name: change,
        },
        filterByNumericValues,
      },
    });
  };

  const handleOnChangeFilterInput = (param) => {
    setFilters({ ...filters, filterByName: { name: param } });
    setChange(param);
  };

  // const { column, comparison, value } = filters.filterByNumericValues[0];

  useEffect(() => {
    const fetchApi = (async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const payload = await fetch(url)
        .then((response) => response.json())
        .then((response) => response.results);
      setData(payload);
    });
    fetchApi();
  }, []);

  const context = {
    data,
    filters,
    setFilters,
    handleOnClickState,
    handleOnChangeFilterInput,
    dropdonw,
    setColum,
    setComparison,
    setValue,
    column,
    comparison,
    value,
    change,
    setChange,
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
};

MyProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { Context, MyProvider as Provider };
