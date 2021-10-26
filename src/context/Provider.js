import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './myContext';
import usePlanets from '../Hooks/useFetch';
/* import useFilter from '../Hooks/useFilter'; */

function Provider({ children }) {
  const { planets, setPlanets, titles } = usePlanets();
  /* const [fplanets, setFplanets] = useState([]); */
  const [titleFilter, setTitleFilter] = useState(titles);
  const [wichColumn, setWichColumn] = useState('');
  const [reset, setReset] = useState(false);
  const [sort, setSort] = useState({
    column: 'name',
    sort: 'ASC',
  });
  const [stateFiltered, setStateFiltered] = useState({ filter: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: sort,
  } });
  /* const { planetsFiltered } = useFilter(); */

  const contextValue = {
    wichColumn,
    setWichColumn,
    stateFiltered,
    planets,
    setPlanets,
    titles,
    setStateFiltered,
    titleFilter,
    setTitleFilter,
    reset,
    setReset,
    setSort,
  };
  return (
    <MyContext.Provider value={ contextValue } displayName="Context Display Name">
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
