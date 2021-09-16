import React, { useEffect, useState } from 'react';

const Table = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  useEffect(() => {
    async function fetchUrl() {
      const { results } = await fetch(url).then((data) => data.json());
      setPlanets(results);
      setLoading(false);
      return results;
    }
    fetchUrl();
  }, []);

  // useEffect(() => {}, []); ComponentDidMount
  if (loading) return <div>carregando</div>;
  return (
    <table className="App-table">
      <thead className="table-head">
        <tr>
          {Object.keys(planets[0]).map((key) => (
            <th key={ key }>{`${key.replace('_', ' ')}`}</th>
          ))}
        </tr>
      </thead>
    </table>
  );
};

export default Table;
