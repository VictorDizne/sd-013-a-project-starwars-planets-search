import React, { useContext } from 'react';
import myContext from '../context/myContext';

export default function RemoveList() {
  const { stateFiltered, setStateFiltered, setReset } = useContext(myContext);
  const { filter } = stateFiltered;
  const { filterByNumericValues } = filter;

  const delClick = (col) => {
    const novoFilter = filterByNumericValues.filter((obj) => obj.column !== col);
    setStateFiltered({ ...stateFiltered,
      filter: { ...filter, filterByNumericValues: [novoFilter] } });
    setReset(true);
  };

  return (
    <ul>
      {filterByNumericValues.map(({ column, comparison, value }, i) => (
        <li className={ i } data-testid="filter" key={ i }>
          <span>
            {`${column} ${comparison} ${value}`}
          </span>
          <button id={ i } onClick={ () => delClick(column) } type="button">X</button>
        </li>
      ))}
    </ul>);
}
