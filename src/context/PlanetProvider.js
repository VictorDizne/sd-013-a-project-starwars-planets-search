import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [tableData, setTableData] = useState([]);
  const [filters, setFilters] = useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        // {
        //   column: '',
        //   comparison: '',
        //   value: '',
        // },
      ],
    },
  );
  const [initFilters, setInitFilters] = useState({
    column: '',
    comparison: '',
    value: '',
  });
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  // const [column, setColumn] = useState('population');
  // const [comparison, setComparison] = useState('maior que');
  // const [valuer, setValuer] = useState(0);

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

  const handleChange = ({ target: { id, value } }) => {
    if (id === 'name') {
      setFilters({ filterByName: { name: value } });
    }
  };

  useEffect(() => {
    const filterPlanets = tableData
      .filter((planet) => planet.name.toLowerCase()
        .includes(filters.filterByName.name.toLowerCase()));

    setFilteredPlanets(filterPlanets);
  }, [filters, tableData]);

  const filterOptions = (column1, comparison1, value1) => {
    if (comparison1 === 'igual a') {
      const equalValue = filteredPlanets.filter(
        (planet) => +planet[column1] === +value1,
      );
      setFilteredPlanets(equalValue); // planet[column] valor dinamico tipo func genérica
    }

    if (comparison1 === 'maior que') {
      const bigger = filteredPlanets.filter((planet) => +planet[column1] > +value1);
      setFilteredPlanets(bigger);
    }

    if (comparison1 === 'menor que') {
      const smaller = filteredPlanets.filter((planet) => +planet[column1] < +value1);
      setFilteredPlanets(smaller);
    }
  };

  const handleColumn = ({ target: { name, value } }) => {
    setInitFilters({
      ...initFilters,
      [name]: value,
    });

    // setFilters({
    //   ...filters,
    //   filterByNumericValues: [
    //     ...filters.filterByNumericValues,
    //     {
    //       column: value,
    //       ...comparison,
    //       ...value }],
    // });
  };

  const planetValue = {
    tableData,
    filters,
    filteredPlanets,
    initFilters,
    handleChange,
    setTableData,
    filterOptions,
    handleColumn,
    // handleComparison,
    // handleValuer,
  };

  return (
    <PlanetContext.Provider value={ planetValue }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;

// const handleComparison = ({ target: { value } }) => {
//   // maior que, menor que, igual a
//   setFilters({ ...filters, filterByNumericValues: [{ comparison: value }] });
// };

// const handleValuer = ({ target: { value } }) => {
//   // valor numérico
//   setFilters({ ...filters, filterByNumericValues: [{ valuer: value }] });
//
//  };
