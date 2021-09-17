import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import starWarsContext from '.';

function Provider({ children }) {
  const firstRender = useRef(true);
  const [data, setData] = useState({});
  const [backup, setBackup] = useState({});
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  // Fetches the data from the API and sets Loading to false
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const APIdata = await response.json();
      setData(APIdata.results);
      setBackup(APIdata.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  // Filters everytime the filter is modified
  useEffect(() => {
    function filterByName(searchText) {
      if (searchText === '') {
        return data;
      }
      const filteredData = [...data]
        .filter((planet) => planet.name.toLowerCase().includes(searchText.toLowerCase()));
      return filteredData;
    }

    if (!firstRender.current) {
      const { name } = filters.filterByName;
      setBackup(filterByName(name));
    } else {
      firstRender.current = false;
    }
  }, [filters, data]);

  const value = { data, backup, loading, filters, setFilters };
  return (
    <starWarsContext.Provider value={ value }>
      { children }
    </starWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
