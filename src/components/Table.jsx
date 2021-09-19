import React from 'react';
import TableHeader from './TableHeader';
import TableContent from './TableContent';

function Table() {
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
