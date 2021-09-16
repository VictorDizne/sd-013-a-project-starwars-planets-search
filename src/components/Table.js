import React, { useContext } from 'react';
import context from '../context/context';
import TableRow from './TableRow';
import Loading from './Loading';

const Table = () => {
  const { data, filters: { filterByName: { name } } } = useContext(context);
  if (data.length < 1) return <Loading />;

  delete data[0].url;
  const titles = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>
          {titles.map((title) => <th key={ title }>{title}</th>)}
        </tr>
      </thead>

      <tbody>
        {data
          .filter((dataItem) => dataItem.name.toLowerCase().includes(name.toLowerCase()))
          .map((dataItem) => <TableRow key={ dataItem.name } data={ dataItem } />)}
      </tbody>
    </table>
  );
};

export default Table;
