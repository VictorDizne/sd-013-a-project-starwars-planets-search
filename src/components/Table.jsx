/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import StarWarsContext from '../context';
import FilterColumns from './FilterColumns';
import SearchBarName from './SearchBarName';

const Table = () => {
  const { state, fetchData } = useContext(StarWarsContext);
  const { header, data } = state;

  // ComponentDidMount para fetching dos dados
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <SearchBarName />
      <FilterColumns />
      <table>
        <thead>
          <tr>
            {header.map((item) => <th key={ item }>{item}</th>)}
          </tr>
        </thead>
        <tbody>
          {
            data && data.map((planet) => (
              <tr key={ planet.name }>
                { delete planet.residents }
                { Object.values(planet).map((info) => <td key={ info }>{info}</td>)}
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  );
};

export default Table;
