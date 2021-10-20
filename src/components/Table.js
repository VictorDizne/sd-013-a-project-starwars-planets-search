import React, { useContext } from 'react';
import context from '../context/context';
import TableRender from './TableRender';
import Loading from './Loading';

const Table = () => {
  const { data, filters: { filterByName: { name } } } = useContext(context);
  if (data.length <= 1) return <Loading />;

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
        {/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter */}
        {data.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
          .map((item) => <TableRender key={ item.name } data={ item } />)}
      </tbody>
    </table>
  );
};

export default Table;
