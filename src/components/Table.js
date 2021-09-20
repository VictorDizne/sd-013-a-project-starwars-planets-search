import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import TableColumns from './TableColumns';
import TableRow from './TableRow';
import Form from './Form';

function Table() {
  const { data, isLoading } = useContext(DataContext);

  return (
    <div>
      {/* Testa se isLoading é verdadeiro e renderiza Loading */}
      { isLoading && 'Loading' }
      {/* Testa se data esta definido e renderiza Componentes da Tabela */}
      { data && (
        <div>
          <Form />
          <table>
            <TableColumns />
            <TableRow />
          </table>
        </div>
      )}
    </div>
  );
}

export default Table;
