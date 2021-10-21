import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import FilterNumber from './FilterNumber';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import FilterBodyByName from './FilterBodyByName';

function Table() {
  const { filter: { filterByName, filterByNumericValues } } = useContext(MyContext);

  function renderizaBody() {
    if (!filterByName.length && !filterByNumericValues.length) return (<TableBody />);
    if (filterByName.length) return (<FilterBodyByName />);
    if (filterByNumericValues.length) return (<FilterNumber />);
  }

  return (
    <table>
      <TableHeader />
      {renderizaBody()}
    </table>
  );
}

export default Table;
