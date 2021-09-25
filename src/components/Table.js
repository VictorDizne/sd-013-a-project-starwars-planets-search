import React, { useContext } from 'react';
import context from '../context/context';
import TableRow from './TableRow';
import Loading from './Loading';

const Table = () => {
  const {
    data,
    getTitles,
    filterNumericValues,
    sortArray,
    filters: {
      filterByName: { name },
      order: { sort, column: columnOption },
    },
    arrays: { columns },
  } = useContext(context);

  //

  const sortPlanets = () => {
    const columnIsNumber = columns.some((col) => col === columnOption);
    const sortedPlanets = filterNumericValues().sort((a, b) => {
      if (typeof a[columnOption] === 'object') return sortArray(a, b);
      if (columnIsNumber) {
        const [numberA, numberB] = [Number(a[columnOption]), Number(b[columnOption])];
        return sort === 'ASC' ? numberA - numberB : numberB - numberA;
      }
      if (sort === 'ASC') return a[columnOption].localeCompare(b[columnOption]);
      return b[columnOption].localeCompare(a[columnOption]);
    });
    return sortedPlanets;
  };

  if (data.length < 1) return <Loading />;

  const titles = getTitles();

  return (
    <table>
      <thead>
        <tr>
          {titles.map((title) => <th key={ title }>{title}</th>)}
        </tr>
      </thead>

      <tbody>
        {sortPlanets()
          .filter((dataItem) => dataItem.name.toLowerCase().includes(name.toLowerCase()))
          .map((dataItem) => <TableRow key={ dataItem.name } data={ dataItem } />)}
      </tbody>
    </table>
  );
};

export default Table;
