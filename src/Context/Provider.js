import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../Hooks/Fetch';
import Context from './Context';

function Provider({ children }) {
  const [planets, loaded] = useFetch();
  const [filtered, setFiltered] = useState(false);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: {
        column: 'population',
        comparison: 'maior que',
        valor: 0,
      },
    },
  });
  const value = {
    planets,
    loaded,
    filter,
    setFilter,
    filtered,
    setFiltered,
  };

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default Provider;
