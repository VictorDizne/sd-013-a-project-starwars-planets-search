import { useEffect, useState } from 'react';

const useFilter = (filterText, filterNumber) => {
  const [data, setData] = useState([]);

  const url = 'https://swapi.dev/api/planets/';
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(({ results }) => setData(results));
  }, []);

  if (filterText !== '') return data.filter((planet) => planet.name.includes(filterText));

  if (filterNumber !== undefined) {
    const { comparison, value, column } = filterNumber;
    if (comparison === 'menor que') {
      return data.filter((planet) => planet[column] < parseFloat(value));
    }
    if (comparison === 'maior que') {
      return data.filter((planet) => planet[column] > parseFloat(value));
    }
    if (comparison === 'igual a') {
      return data.filter((planet) => planet[column] === value);
    }
  }

  return data;
};

export default useFilter;
