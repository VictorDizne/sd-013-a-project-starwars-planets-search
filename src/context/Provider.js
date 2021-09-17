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
  const [swapi, setSwapi] = useState(initialState);

  useEffect(() => {
    const fetchSwipe = async () => {
      const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await request.json();
      setSwapi({ ...swapi, data: data.results });
    };
    fetchSwipe();
  }, [swapi]);

  return (
    <ContextSwapi.Provider value={ { swapi, setSwapi } }>
      {children}
    </ContextSwapi.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
