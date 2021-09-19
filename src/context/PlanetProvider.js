import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [filter, setFilter] = useState({
    filters: {
      filterByName: { name: '' },
      filterByNumericValues: [],
    },
  });
  const [planets, setPlanets] = useState({});

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <PlanetContext.Provider value="X">
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.instanceOf(Element).isRequired,
};
export default PlanetProvider;
