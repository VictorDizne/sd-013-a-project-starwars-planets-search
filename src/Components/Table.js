import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context/Context';

function Table(props) {
  const { data } = useContext(Context);
  console.log(data);
  return (
    <table>
      <tr>
        <th></th>
        <th>b</th>
        <th>c</th>
      </tr>
    </table>
  );
}

Table.propTypes = {

};

export default Table;
