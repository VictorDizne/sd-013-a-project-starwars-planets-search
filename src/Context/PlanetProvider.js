import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import planetAPI from '../Services/PlanetAPI';

function PlanetProvider({ children }) {
  // component did mount
  const [data, setData] = useState([]);
  const [rend, setRend] = useState([]);
  const [filters, setFilters] = useState({
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
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const load = async () => {
      const { results } = await planetAPI();
      setData(results);
      setRend(results);
    };

    load();
  }, []);

  const context = {
    data,
    rend,
    setRend,
    filters,
    setFilters,
  };

  return (
    <PlanetContext.Provider value={ context }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
