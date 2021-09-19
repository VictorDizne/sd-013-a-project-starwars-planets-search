import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchApi from '../services/requestAPI';
import myContext from './index';

function Provider({ children }) {
  // INITIAL STATES
  const initialFilteredData = [];
  const initialData = [];
  const initialLoading = true;
  const initialFilters = { filterByName: { name: '' } };
  // INITIAL STATES

  // STATES
  const [unfilteredData, setUnfilteredData] = useState(initialFilteredData);
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(initialLoading);
  const [filters, setFilters] = useState(initialFilters);
  // STATES

  // FUNCTION NAME FILTER
  const handleChange = ({ target: { value } }) => {
    setFilters(({ ...filters, filterByName: { name: value } }));
  };

  const filter = () => {
    const filtered = unfilteredData
      .filter((item) => item.name.includes(filters.filterByName.name));
    setData(filtered);
  };
  useEffect(filter, [filters.filterByName.name]);
  // FUNCTION NAME FILTER

  // COMPONENTDIDMOUNT
  useEffect(() => {
    fetchApi()
      .then((requestData) => {
        setData(requestData);
        setUnfilteredData(requestData);
        setLoading(false);
      });
  }, []);
  // COMPONENTDIDMOUNT

  // VALUE OF PROVIDER
  const contextValue = { data, loading, filters, handleChange };
  // VALUE OF PROVIDER

  // RENDER CONDITIONAL
  if (loading) return <h1>Loading</h1>;
  // RENDER CONDITIONAL

  // RETURN FUNCTIONAL COMPONENT
  return (
    <myContext.Provider value={ contextValue }>
      {children}
    </myContext.Provider>
  );
  // RETURN FUNCTIONAL COMPONENT
}

// PROPTYPES
Provider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};
// PROPTYPES

export default Provider;
