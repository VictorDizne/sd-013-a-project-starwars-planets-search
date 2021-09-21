import { useState, useEffect } from 'react';

function FetchAPI() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const getData = async () => {
      const response = await fetch(URL);
      const json = await response.json();
      const { results } = json;
      setData(results);
    };

    getData();
  }, []);

  return ({
    data,
  });
}

export default FetchAPI;
