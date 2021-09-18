import React, { useContext, useEffect } from 'react';
import context from '../context/context';
import TableRow from './TableRow';
import Loading from './Loading';

const Table = () => {
  const {
    data,
    filters: { filterByName: { name }, filterByNumericValues },
  } = useContext(context);

  useEffect(() => {}, [filterByNumericValues]);

  if (data.length < 1) return <Loading />;

  const getTitles = () => {
    delete data[0].url;
    return Object.keys(data[0]);
  };

  const titles = getTitles();

  const filterNumericValues = () => filterByNumericValues
    .reduce((acc, { column, comparison, numberValue }) => {
      const afterFilter = acc.filter((dataItem) => {
        const columnNumber = Number(dataItem[column]);
        if (comparison === 'maior que') return columnNumber > numberValue;
        if (comparison === 'menor que') return columnNumber < numberValue;
        return columnNumber === numberValue;
      });
      return afterFilter;
    }, data);

  return (
    <table>
      <thead>
        <tr>
          {titles.map((title) => <th key={ title }>{title}</th>)}
        </tr>
      </thead>

      <tbody>
        {filterNumericValues()
          .filter((dataItem) => dataItem.name.toLowerCase().includes(name.toLowerCase()))
          .map((dataItem) => <TableRow key={ dataItem.name } data={ dataItem } />)}
      </tbody>
    </table>
  );
};

export default Table;
