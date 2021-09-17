import { useEffect, useState } from 'react';

const useFetchPlanet = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((res) => res.json())
      .then((json) => setData(json.results));
  }, []);

  return [data];
};

export default useFetchPlanet;
