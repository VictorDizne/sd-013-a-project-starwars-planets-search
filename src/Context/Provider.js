import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [head, setHead] = useState([]);

  //  const contextValue = {
  //    data,
  //  };

  useEffect(() => {
    // useEfect nesse exemplo, com colchete -segundo parametro- = componentDidiMoiunt()
    function fechtApi() {
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => {
          response.json().then((res) => {
            const planetsData = res.results;
            // console.log(planetsData);
            const planets = planetsData.map((planeta) => {
              const planetOffResidents = planeta;
              delete planetOffResidents.residents;
              return planetOffResidents;
            });
            setData(planets);
            const keys = Object.keys(planets[0]);
            setHead(keys);
          });
        });
    }
    fechtApi();
  }, []);

  return (
    <MyContext.Provider value={ { data, head } }>
      { children }
    </MyContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
