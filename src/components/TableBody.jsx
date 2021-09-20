import React, { useContext } from 'react';
import tableContext from '../context';

const TableBody = () => {
  const { dataValues } = useContext(tableContext);

  return (
    <div>
      { dataValues.map((listPlanets, indi) => (
        <tr key={ indi }>
          {listPlanets.map((result, ind) => (
            <td key={ ind }>
              { result }
            </td>))}
        </tr>
      )) }

    </div>
  );
};

export default TableBody;
