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
      filterByNumericValues: [],
    },
};

function Provider({ children }) {
  const [swapi, setSwapi] = useState();

  const setfilterByNumericValues = (objectAdd) => {
    setSwapi({ ...swapi,
      filters: { ...swapi.filters,
        filterByNumericValues: [
          ...swapi.filters.filterByNumericValues,
          objectAdd,
        ],
      },
    });
  };

  const setnameOfThePlanet = (event) => {
    setSwapi({ ...swapi,
      filters: { ...swapi.filters,
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
    <ContextSwapi.Provider
      value={ {
        swapi, setnameOfThePlanet, setfilterByNumericValues,
      } }
    >
      {children}
    </ContextSwapi.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
