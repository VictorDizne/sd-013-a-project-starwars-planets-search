import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { tableData } = useContext(PlanetContext);

  if (!tableData.length) return <p> Loading ... </p>;

  const keys = Object.keys(tableData[1]);
  const cols = keys.filter((key) => key !== 'residents');

  return (
    <table>

      <thead>

        <tr>
          {/* map para escrever os títulos/nomes de cada coluna */}
          {cols.map((col) => (<th key={ col }>{col}</th>))}
        </tr>

      </thead>

      <tbody>

        {/* tableData é um array de objetos; cada objeto é um "planeta",
        ou seja contêm os dados de um planeta; cada objeto tem 13 chaves */}
        {tableData
        // map para criar cada row/linha
          .map((planet) => (
            <tr key={ planet.name }>

              {/* map para preencher com dados cada célula de cada coluna,
              na linha do seu respectivo planeta */}
              {cols.map((col) => (<td key={ planet[col] }>{planet[col]}</td>))}

            </tr>
          ))}

      </tbody>

    </table>
  );
}

export default Table;
