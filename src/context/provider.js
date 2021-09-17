import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarsContext from './StarContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const StarsApi = async () => {
    const api = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const Obj = await api.json();
    const arrayResult = Obj.results;
    setData(arrayResult);
  };
  useEffect(() => {
    StarsApi();
  }, []);
  const contextValue = {
    data,
  };
  return (
    <StarsContext.Provider value={ contextValue }>
      { children }
    </StarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

// fonte propTypes do children https://spectrum.chat/react/general/children-is-missing-in-props-validation~0b004d6e-4f9e-44e5-a039-21f23e7c7c5d
// explicação do node:  // Anything that can be rendered: numbers, strings, elements or an array
// (or fragment) containing these types.
// optionalNode: PropTypes.node,
// fonte: https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
