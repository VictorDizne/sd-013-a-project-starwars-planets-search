import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import getData from '../services/api';
import Loading from '../components/Loading';

export const StarWarsContext = createContext();

const StarWarsContextProvider = ({ children }) => {
  const initialFilters = {
    filterByName: {
      name: '',
    },

    filterByNumericValues: [],
  };

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(initialFilters);

  const fetchData = async () => {
    try {
      const response = await getData();
      const { results } = response;
      setData(results);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const context = { data, error, loading, filters, setFilters };

  return (
    <StarWarsContext.Provider value={ context }>
      {loading ? <Loading /> : children}
    </StarWarsContext.Provider>
  );
};

export default StarWarsContextProvider;

StarWarsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
