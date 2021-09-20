import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

const Provider = ({ children }) => {
  const [statePlanets, setStatePlanets] = useState({
    data: [],
  });

  //  const contextValue = {
  //    statePlanets,
  //  };

  useEffect(() => {
    // useEfect nesse exemplo, com colchete -segundo parametro- = componentDidiMoiunt()
    function fechtApi() {
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => {
          response.json().then((data) => {
            const planets = data.results;
            delete planets.residents;
            setStatePlanets(planets);
            console.log(planets);
          });
        });
    }
    fechtApi();
  }, []);

  return (
    <MyContext.Provider value={ statePlanets }>
      { children }
    </MyContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
