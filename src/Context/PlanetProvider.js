import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import planetAPI from '../Services/PlanetAPI';

function PlanetProvider({ children }) {
  // component did mount
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    } });

  // Filtros

  const setFilterByName = ({ target }) => {
    const { value } = target;
    setFilters({ ...filters, filterByName: { name: value.toLowerCase() } });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const load = async () => {
      const { results } = await planetAPI();
      setData(results);
    };

    load();
  }, []);

  const context = {
    data,
    setFilterByName,
    filters,
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
