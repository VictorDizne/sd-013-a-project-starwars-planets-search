import React, { useContext } from 'react';
import tableContext from '../context';

const TableBody = () => {
  const { dataTable } = useContext(tableContext);
  // refatorei com a ajuda do Lima Lima
  return (
    <div>
      { dataTable.map((listPlanets, indi) => (
        <tr key={ indi }>
          {Object.values(listPlanets).map((result, ind) => (
            <td key={ ind }>
              { result }
            </td>))}
        </tr>
      )) }

    </div>
  );
};

export default TableBody;
