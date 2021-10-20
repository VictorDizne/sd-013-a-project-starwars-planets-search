import React, { useContext } from 'react';
import context from '../context/context';
import TableRender from './TableRender';
import Loading from './Loading';

const Table = () => {
  const {
    data,
    filters: { filterByName: { name }, filterByNumericValues },
  } = useContext(context);

  if (data.length <= 1) return <Loading />;

  const objTitle = () => {
    delete data[0].url;
    return Object.keys(data[0]);
  };

  const titles = objTitle();

  // Lógica entendida com ajuda de Gabriel Biasoli
  const filterNumeric = () => filterByNumericValues
    .reduce((acc, { column, comparison, numberValue }) => {
      const comparsionFilter = acc.filter((dataItem) => {
        const columnNumber = Number(dataItem[column]);
        if (comparison === 'maior que') return columnNumber > numberValue;
        if (comparison === 'menor que') return columnNumber < numberValue;
        return columnNumber === numberValue;
      });
      return comparsionFilter;
    }, data);

  return (
    <table>
      <thead>
        <tr>
          {titles.map((title) => <th key={ title }>{title}</th>)}
        </tr>
      </thead>

      <tbody>
        {/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter */}
        {filterNumeric()
          .filter((dataItem) => dataItem.name.toLowerCase()
            .includes(name.toLowerCase()))
          .map((dataItem) => <TableRender key={ dataItem.name } data={ dataItem } />)}
      </tbody>
    </table>
  );
};

export default Table;
