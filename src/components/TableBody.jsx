import React, { useContext } from 'react';
import tableContext from '../context';

const TableBody = () => {
  const { dataTable } = useContext(tableContext);
  // refatorei com a ajuda do Lima Lima
  return (
    <tbody className="bodyTable">
      { dataTable.map((listPlanets, indi) => (
        <tr className="linhaBody" key={ indi }>
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
