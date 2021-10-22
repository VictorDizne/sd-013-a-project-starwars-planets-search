import React, { useEffect, useState } from 'react';
// import Context from '../Context/Context';
// import FetchAPI from '../Hooks/Fetch';

const Table = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const FetchAPI = async () => {
    const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const json = await result.json();
    json.results.map((planet) => delete planet.residents);
    setData(json.results);
    setLoaded(true);
  };

  useEffect(() => {
    FetchAPI();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          {loaded && Object.keys(data[0]).map((category, index) => (
            <th key={ `${category}-${index}` }>{ category }</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {loaded && data.map((planet) => (
          <tr key={ `${planet.name}` }>
            {Object.values(planet).map((planetData, index) => (
              <td key={ `${planet.name}-${index}` }>{planetData}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
