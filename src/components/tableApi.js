import React, { useEffect, useState } from 'react';
import Loading from './loading';

const Table = () => {
  const [api, setApi] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((res) => res.json());
      // console.log(results);
      setApi(results);
    };
    fetchApi();
  }, []);
  // const keys = Object.keys(api[0]);
  if (api.length === 0) {
    return <Loading />;
  }
  const titlesTable = () => {
    let arr = ['filme Relacionado 1',
      'filme Relacionado 2', 'filme Relacionado 3', 'filme Relacionado 4'];
    const arrKeys = Object.keys(api[0])
      .filter((item) => item !== 'residents'
      && item !== 'created' && item !== 'edited' && item !== 'url' && item !== 'films');
    arr = [...arrKeys, ...arr];
    console.log(arr);
    return arr.map((key) => (
      <th key={ key }>
        {key}
        :
      </th>
    ));
  };

  // const tbodyTable = () => ();

  return (
    <header>
      <table>
        <thead>
          <tr>{titlesTable()}</tr>
        </thead>
        <tbody>
          {api.map((
            {
              name,
              rotation_period: rotationPeriod,
              orbital_period: orbitalPeriod,
              diameter,
              climate,
              gravity,
              terrain,
              surface_water: surfaceWater, population,
              films }, index,
          ) => (
            <tr key={ index }>
              <td>{name}</td>
              <td>{rotationPeriod}</td>
              <td>{orbitalPeriod}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td>{surfaceWater}</td>
              <td>{population}</td>
              <td>{(films.length > Number('0')) ? films[0] : 'no Movie'}</td>
              <td>{(films.length > Number('1')) ? films[1] : 'no Movie'}</td>
              <td>{(films.length > Number('2')) ? films[2] : 'no Movie'}</td>
              <td>{(films.length > Number('3')) ? films[3] : 'no Movie'}</td>
              <td>{(films.length > Number('4')) ? films[4] : 'no Movie'}</td>
            </tr>))}
        </tbody>
      </table>
    </header>
  );
};

export default Table;
