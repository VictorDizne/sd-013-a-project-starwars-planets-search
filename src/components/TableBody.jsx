import React, { useContext } from 'react';
import tableContext from '../context';

const TableBody = () => {
  const { dataTable } = useContext(tableContext);
  // refatorei com a ajuda do Lima Lima
  return (
    <tbody>
      { dataTable.map((listPlanets, indi) => (
        <tr key={ indi }>
          {Object.values(listPlanets).map((result, ind) => (
            <td key={ ind }>
              { result }
            </td>))}
        </tr>
      )) }

    </tbody>
  );
};

export default TableBody;
