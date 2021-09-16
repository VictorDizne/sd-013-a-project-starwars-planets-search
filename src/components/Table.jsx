// Importando o hook useContext do react
import React, { useContext } from 'react';
// Importa o contexto criado para esse projeto StarWars
import StarWarsContext from '../contexts/StarWarsContext';

// Criando o componente funcional
const Table = () => {
  // Salva na variável planets os planetas vindo da API em /services
  const {
    planets,
    headers,
    filters: {
      filterByName: { name },
      filterByNumericValues,
      order: { column: header, sort } },
  } = useContext(StarWarsContext);

  const comparisonReducer = (p, { comparison, value, column }) => {
    switch (comparison) {
    case 'maior que':
      return p.filter((planet) => Number(planet[column]) > Number(value));
    case 'menor que':
      return p.filter((planet) => Number(planet[column]) < Number(value));
    case 'igual a':
      return p.filter((planet) => Number(planet[column]) === Number(value));
    default:
      return p;
    }
  };

  // Monta a tabela
  return (
    <table>
      {/* Aqui vai montar o CABEÇALHO da tabela */}
      <thead>
        <tr>
          {/* Faz um map, nas keys/chaves do headers montando o cabeçalho da tabela */}
          {
            headers
              .map((h, index) => (
                <th key={ index }>{h}</th>
              ))
          }
        </tr>
      </thead>
      {/* Aqui vai montar o CORPO da tabela com os dados dos planetas */}
      <tbody>
        {
          filterByNumericValues
            .reduce(comparisonReducer, planets)
            .filter((planet) => (planet.name).includes(name))
            .sort((a, b) => {
              let fieldA = a[header];
              let fieldB = b[header];

              if (fieldA === 'unknown') fieldA = 0;
              if (fieldB === 'unknown') fieldB = 0;

              if (!Number.isNaN(Number(fieldA))) {
                fieldA = Number(fieldA);
                fieldB = Number(fieldB);
              }

              if (fieldA > fieldB) {
                return sort === 'ASC' ? 1 : +'-1';
              }
              if (fieldA < fieldB) {
                return sort === 'ASC' ? +'-1' : 1;
              }
              return 0;
            })
            // Percorre a variável planets com o array recebido, montando cada linha da tabela(ou <tr>) pegando somente os values, pois as keys/chaves não são necessárias
            .map((planet, index) => (
              <tr key={ index }>
                {
                  Object.entries(planet)
                    .map(([key, info]) => (
                      <td
                        data-testid={ key === 'name' ? 'planet-name' : null }
                        key={ info }
                      >
                        {info}
                      </td>))
                }
              </tr>
            ))
        }
      </tbody>
    </table>
  );
};

export default Table;
