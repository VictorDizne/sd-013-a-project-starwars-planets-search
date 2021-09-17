import { useEffect, useState } from 'react';

function useFiltersNumberic() {
  const [data, setData] = useState([]);

  const handleAddData = (dataParam) => {
    setData(dataParam);
  };

  const fetchApi = async () => {
    const results = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((resp) => resp.results);

    handleAddData(results);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return data;
}

export default useFiltersNumberic;
