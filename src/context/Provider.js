import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import fetchStar from '../services/FetchPlanet';

function Provider(props) {
  const [data, setData] = useState([]);

  const arrayApi = async () => {
    const planet = await fetchStar();
    setData(planet);
  };

  useEffect(() => {
    arrayApi();
  }, []);

  const { children } = props;

  return (
    <MyContext.Provider value={ data }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
