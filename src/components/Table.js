import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
// import FilterNumber from './FilterNumber';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import FilterBodyByName from './FilterBodyByName';

function Table() {
  const { filter: { filterByName } } = useContext(MyContext);

  function renderizaBody() {
    if (!filterByName.length) return (<TableBody />);
    if (filterByName.length) return (<FilterBodyByName />);
  }

  return (
    <table>
      <TableHeader />
      {renderizaBody()}
    </table>
  );
}

export default Table;
