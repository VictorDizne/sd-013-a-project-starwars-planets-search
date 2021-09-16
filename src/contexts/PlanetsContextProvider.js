import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [isPlanetsFilled, setIsPlanetsFilled] = useState(false);
  const [columns, setColumns] = useState([]);

  // useEffect(() => {
  //   getPlanets()
  //     .then((results) => {
  //       setData(results);
  //       setIsPlanetsFilled(true);
  //     });
  // }, []);

  // useEffect(() => {
  //   getPlanets(setPlanets, setIsPlanetsFilled);
  // }, []);

  return (
    <PlanetsContext.Provider
      value={ {
        data,
        setData,
        isPlanetsFilled,
        setIsPlanetsFilled,
        columns,
        setColumns,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsContextProvider;
