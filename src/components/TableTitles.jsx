import React, { useContext } from 'react';
import tableContext from '../context';

const TableTitles = () => {
  const { dataKey } = useContext(tableContext);

  return (

    <thead>
      <tr className="linha-titulo">
        {dataKey.map((results, ind) => (
          <th key={ ind }>
            {results}
          </th>))}
      </tr>
    </thead>

  );
};

export default TableTitles;
