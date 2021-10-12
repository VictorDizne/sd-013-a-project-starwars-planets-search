import { useContext, useEffect } from 'react';
import MyContext from '../context/Context';

const APIENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

function FetchApi() {
  const { setData } = useContext(MyContext);
  useEffect(() => {
    const APIresults = async () => {
      try {
        const response = await fetch(APIENDPOINT);
        await response.json()
          .then(({ results }) => {
            results.forEach((planet) => {
              delete planet.residents;
            });
            setData(results);
          });
      } catch (error) {
        return error;
      }
    };
    APIresults();
  }, [setData]);
}

export default FetchApi;
