import React, { useEffect, useContext } from 'react';
import StarWarsContext from '../context';

const Table = () => {
  const { state, setState } = useContext(StarWarsContext);
  const { header, data } = state;

  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const fetchData = async () => {
    const response = await fetch(url);
    const { results } = await response.json();
    setState({
      ...state,
      data: results });
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <table>
      <thead>
        <tr>
          {header.map((item) => <th key={ item }>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        {
          data.map((planet) => (
            <tr key={ planet.name }>
              { Object.values(planet).map((info) => <td key={ info }>{info}</td>)}
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Table;
