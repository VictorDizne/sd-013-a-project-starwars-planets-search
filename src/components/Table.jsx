import React, { useContext } from 'react';
import myContext from '../context';
import TableHeader from './TableHeader';
import TableContent from './TableContent';

function Table() {
  const contextValue = useContext(myContext).data;
  console.log(contextValue);
  return (
    <div className="main">
      <table>
        <TableHeader />
        <TableContent />
      </table>
    </div>
  );
}

export default Table;
