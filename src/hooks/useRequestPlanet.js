import { useEffect, useState } from 'react';

const useRequestPlanet = (initialState = []) => {
  const [planets, setPlanets] = useState(initialState);
  const [url, setUrl] = useState(initialState);

  useEffect(() => {
    const fetchRequest = async (urlParam) => {
      const request = await fetch(urlParam);
      const json = await request.json();
      return json;
    };
    const allFetchRequest = async () => {
      const request = await fetchRequest(url);

      // Como resolver várias requisições dentro de um loop?
      // =============================================================
      // request.results.map(async ({ films }, index) => {
      //   const allFilms = films.map((film) => fetchRequest(film));
      //   request.results[index].films = await Promise.all(allFilms);
      // });
      // =============================================================
      setPlanets(request.results);
    };
    allFetchRequest();
  }, [url]);

  return [planets, setUrl];
};

export default useRequestPlanet;
