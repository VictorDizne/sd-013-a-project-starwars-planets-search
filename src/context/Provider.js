import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchApi from '../services/requestAPI';
import myContext from './index';

function Provider({ children }) {
  // INITIAL STATES
  const INITIALFILTEREDDATA = [];
  const INITIALDATA = [];
  const INITIALLOADING = true;
  const INITIALFILTERS = {
    filterByName: { name: '' },
    filterByNumericValues: [] };
  // INITIAL STATES

  // STATES
  const [unfilteredData, setUnfilteredData] = useState(INITIALFILTEREDDATA);
  const [data, setData] = useState(INITIALDATA);
  const [loading, setLoading] = useState(INITIALLOADING);
  const [filters, setFilters] = useState(INITIALFILTERS);
  // STATES

  // FUNCTION SEARCHBAR FILTER
  const handleChange = ({ target: { value } }) => {
    setFilters(({ ...filters, filterByName: { name: value } }));
  };

  const filter = () => {
    const filtered = unfilteredData
      .filter((item) => item.name.includes(filters.filterByName.name));
    setData(filtered);
  };

  useEffect(filter, [filters.filterByName.name]);
  // FUNCTION SEARCHBAR FILTER

  // FUNCTION NUMERIC FILTER
  const handleClickNumeric = (...state) => {
    setFilters(({ ...filters,
      filterByNumericValues:
      [...filters.filterByNumericValues,
        { column: state[0], comparison: state[1], value: state[2] }] }));
  };

  useEffect(() => {
    filters.filterByNumericValues.forEach((item) => {
      const filteredListContent = unfilteredData.filter((element) => {
        if (item.comparison === 'maior que') {
          return parseInt(element[item.column], 10) > parseInt(item.value, 10);
        }
        if (item.comparison === 'menor que') {
          return parseInt(element[item.column], 10) < parseInt(item.value, 10);
        }
        return parseInt(element[item.column], 10) === parseInt(item.value, 10);
      });
      setData(filteredListContent);
    });
  },
  [filters.filterByNumericValues, filters.filterByNumericValues.value,
    unfilteredData]);
  // FUNCTION NUMERIC FILTER

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
  const contextValue = { data, loading, filters, handleChange, handleClickNumeric };

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
