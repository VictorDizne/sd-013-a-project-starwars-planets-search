import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StartWarsContext';
// import response from '../testData';

function StarWarsProvider({ children }) {
  const [dataPlanet, setDataPlanet] = useState([]);
  const [saveResultsFilter, setSaveResultsFilter] = useState([]);
  const [state, setState] = useState(
    {
      data: [],
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [
          {
            column: '',
            comparison: '',
            value: '',
          },
        ],
      },
    },
  );

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();

      setState({ ...state, data: data.results });
      setDataPlanet(data.results);
      setSaveResultsFilter(data.results);
      // setState({ ...state, data: response.results });
      // setDataPlanet(response.results);
      // setSaveResultsFilter(response.results);
    }
    fetchData();
  }, []);

  const filterbyNumerics = (column, comparison, num) => {
    const filteredDataByNumerics = saveResultsFilter.filter((planet) => {
      if (comparison === 'maior que') {
        return (Number(planet[column]) > Number(num));
      } if (comparison === 'menor que') {
        return (Number(planet[column]) < Number(num));
      } if (comparison === 'igual a') {
        return (Number(planet[column]) === Number(num));
      }
      return false;
    });
    setState({ ...state, data: filteredDataByNumerics });
  };

  const contextValue = {
    dataPlanet,
    setDataPlanet,
    state,
    setState,
    filterbyNumerics,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf,
}.isRequired;

export default StarWarsProvider;
