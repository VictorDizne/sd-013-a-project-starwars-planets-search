import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../Context';

function Provider({ children }) {
  const [info, setInfo] = useState([]);

  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(url).then((response) => response.json());
      setInfo(data.results);
    }
    fetchData();
  }, []);

  return (
    <MyContext.Provider value={ info }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf().isRequired,
};

export default Provider;
