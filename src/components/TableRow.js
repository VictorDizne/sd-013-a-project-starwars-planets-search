import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

function TableRow() {
  const { data } = useContext(DataContext);
  /* const dataFilter = data.map((planet) => planet.filter((key) => key !== 'residents'));
  console.log(dataFilter); */
  const values = () => data.map((planet) => {
    const allInfo = Object.entries(planet);
    const aux = allInfo.filter((info) => info[0] !== 'residents');
    return (
      <tr key={ planet.name }>
        {aux
          .map((item) => <td key={ item[1] }>{item[1]}</td>)}
      </tr>
    );
  });

  return (
    <tbody>
      { values()}
    </tbody>
  );
}

export default TableRow;
