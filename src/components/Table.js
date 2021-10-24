import React, { useContext } from 'react';
import ApiContext from '../context/ApiContext';
import TableDataRow from './TableDataRow';

function Table() {
  const { filteredData } = useContext(ApiContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Período de Rotação</th>
          <th>Perpiodo Orbital</th>
          <th>Diâmetro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terreno</th>
          <th>Superfície da Água</th>
          <th>População</th>
          <th>Filmes</th>
          <th>Criado</th>
          <th>Editado</th>
          <th>Url</th>
        </tr>
      </thead>
      <TableDataRow data={ filteredData } />
    </table>
  );
}
export default Table;
