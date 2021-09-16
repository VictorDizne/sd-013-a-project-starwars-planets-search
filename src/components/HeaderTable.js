import React, { useContext } from 'react';
import Context from '../context/index';

function Table() {
  const { data } = useContext(Context);
  const dataKeys = { ...data[0] };
  const arrayKeys = Object.keys(dataKeys);
  const arrayFiltered = arrayKeys.filter((item) => item !== 'residents');

  const headerMap = () => (
    <tr>
      { arrayFiltered.map((item) => (
        <th key={ item }>{ item }</th>
      )) }
    </tr>
  );

  return (
    headerMap()
  );
}

export default Table;
