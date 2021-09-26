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
      order: { column: 'name', sort: 'ASC' },
    },
};

function Provider({ children }) {
  const [swapi, setSwapi] = useState();

  const orderDataList = (column = 'name', sort = 'ASC') => {
    setSwapi({
      ...swapi,
      filters: {
        ...swapi.filters,
        order: { column, sort },
      },
    });
  };

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

  const delFilterByNumericValues = (key) => {
    setSwapi({ ...swapi,
      filters: { ...swapi.filters,
        filterByNumericValues: [
          ...swapi.filters.filterByNumericValues.filter(
            (i) => i.column !== key,
          ),
        ],
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
        swapi,
        setnameOfThePlanet,
        setfilterByNumericValues,
        delFilterByNumericValues,
        orderDataList,
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
