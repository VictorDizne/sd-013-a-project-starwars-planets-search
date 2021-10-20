import React, { useContext } from 'react';
import context from '../context/context';
import TableRender from './TableRender';
import Loading from './Loading';

const Table = () => {
  const { data } = useContext(context);
  console.log(data);
  if (data.length <= 1) return <Loading />;

  delete data[0].url;
  const titles = Object.keys(data[0]);
  console.log(titles);

  return (
    <table>
      <thead>
        <tr>
          {titles.map((title) => <th key={ title }>{title}</th>)}
        </tr>
      </thead>

      <tbody>
        {data.map((dataItem) => <TableRender key={ dataItem.name } data={ dataItem } />)}
      </tbody>
    </table>
  );
};

export default Table;
