import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ContextSwapi from './ContextSwapi';

const initialState = {
  data: {},
  filters:
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: '',
        },
      ],
    },
};

function Provider({ children }) {
  const [swapi, setSwapi] = useState();

  const setnameOfThePlanet = (event) => {
    setSwapi({ ...swapi,
      filters: {

        filterByName: {
          name: event.target.value,
        },
      },
    });
  };

  useEffect(() => {
    const fetchSwipe = async () => {
      const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await request.json();
      setSwapi({ ...initialState, data: data.results });
    };
    fetchSwipe();
  }, []);

  return (
    <ContextSwapi.Provider value={ { swapi, setnameOfThePlanet } }>
      {children}
    </ContextSwapi.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
