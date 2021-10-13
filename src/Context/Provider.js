import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SwapiContext from './SwapiContext';

// const INITIAL_STATE = {
//   data: [],
//   filters: {
//     filterByName: {
//       name: '',
//     },
//     filterByNumericValues: [],
//     order: {
//       column: 'name',
//       sort: 'ASC',
//     },
//   },
// };

function Provider({ children }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchApi = async () => {
      const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const response = await request.json();
      const { results } = response;
      const filteredData = results.filter((planet) => delete planet.residents);
      setData(filteredData);
      setLoading(false);
    };
    fetchApi();
  }, []);

  const value = { data, loading };
  return (
    <SwapiContext.Provider value={ value }>
      { children }
    </SwapiContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
