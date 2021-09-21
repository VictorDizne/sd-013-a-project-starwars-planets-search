import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [tableData, setTableData] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [inputNumber, setInputNumber] = useState(0);
  const [inputColumn, setInputColumn] = useState('');

  const [filters, setFilters] = useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: 0,
        },
      ],
    },
  );

  const [initFilters, setInitFilters] = useState(
    {
      column: 'population',
      comparison: 'maior que',
      value: 0,
    },
  );

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      return data.results;
    };
    fetchResults().then((results) => setTableData(results));
  }, []);

  useEffect(() => {
    setFilteredPlanets(tableData);
  }, [tableData]);

  useEffect(() => {
    const filteredPlanetsByText = tableData
      .filter((planet) => planet.name.toLowerCase()
        .includes(filters.filterByName.name.toLowerCase()));
    setFilteredPlanets(filteredPlanetsByText);
  }, [filters, tableData]);

  const handleChange = ({ target: { id, value } }) => {
    if (id === 'name') {
      setFilters({ ...filters, filterByName: { name: value } });
    }
  };

  const handleSelect = ({ target: { name, value } }) => {
    setInitFilters({
      ...initFilters,
      [name]: value,
    });
    setInputNumber(value);
  };

  const handleClick = (inputNumber2) => {
    setFilters({ ...filters, filterByNumericValues: [{ ...initFilters }] });
    console.log(filters);
    switch (filters.filterByNumericValues[0].comparison) {
    case 'maior que':
      setFilteredPlanets(filteredPlanets
        .filter((planet) => {
          console.log(+planet[inputColumn]);
          console.log(inputNumber2);
          return +planet[inputColumn]
            > +inputNumber2;
        }));
      console.log('MAIOR QUE');
      console.log(filteredPlanets);
      break;

    case 'menor que':
      setFilteredPlanets(filteredPlanets
        .filter((planet) => planet[filters.filterByNumericValues.column]
            < filters.filterByNumericValues.value));
      break;

    case 'igual a':
      setFilteredPlanets(filteredPlanets
        .filter((planet) => planet[filters.filterByNumericValues.column]
            === filters.filterByNumericValues.value));
      break;

    default:
      console.log('default');
      return setFilteredPlanets(filteredPlanets);
    }
  };

  const planetValue = {
    tableData,
    filters,
    filteredPlanets,
    inputNumber,
    inputColumn,
    setInputColumn,
    setInputNumber,
    handleChange,
    handleSelect,
    handleClick,
    setTableData,
  };

  return (
    <PlanetContext.Provider value={ planetValue }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
