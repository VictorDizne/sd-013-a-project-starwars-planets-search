import React, { /* useEffect, */ useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import useFilter from '../hooks/useFilter';

function Provider({ children }) {
  const [filterText, setFilterText] = useState('');
  const [filterNumber, setFilterNumber] = useState({
    column: '',
    comparison: '',
    value: '',
  });
  const data = useFilter(filterText, filterNumber);

  const [optionsColumn, setColumn] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);
  const [optionsComparison, setComparison] = useState(['maior que',
    'menor que', 'igual a']);

  const state = {
    data,
    filters: {
      filterText,
      filterNumber,
    },
    optionsColumn,
    optionsComparison,
    setColumn,
    setComparison,
    setFilterText,
    setFilterNumber,
  };

  return (
    <Context.Provider value={ state }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default Provider;
