import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/Context';

export default function FilterCard({ comparison, column, value, key }) {
  const {
    filterNumeric,
    filterCard,
    setFilterNumeric,
    setFilterCard,
    setListPlanets,
    data } = useContext(MyContext);

  function handleClick(filterColumn) {
    setFilterNumeric({
      column: '',
      value: 0,
      comparison: '',
    });
    const setFilter = filterCard.filter((card) => card.column !== filterColumn);
    if (filterCard.length === 1) {
      setFilterCard([]);
    } else setFilterCard(setFilter);
    setListPlanets(data);
  }

  return (
    <div key={ key } data-testid="filter">
      <p>
        {comparison}
      </p>
      <p>
        {column}
      </p>
      <p>
        {value}
      </p>
      <button onClick={ () => handleClick(filterNumeric.column) } type="button">X</button>
    </div>
  );
}

const { string } = PropTypes;

FilterCard.propTypes = {
  comparison: string,
  column: string,
  value: string,
}.isRequired;
