import { useEffect, useState } from 'react';

export default function usePlanets() {
  // utilizamos o hook useState para criar um estado que recebe como valor padrão um array vazio. Recebemos dois parâmetros, o primeiro é o estado em si, e o segundo é uma função para alterar o estado:
  const [planets, setPlanets] = useState([]);
  const [titles, setTitles] = useState([]);
  // criamos um estado(planets) para armazenar os dados retornados pela api;
  // criamos um estado(titles) para puxarmos as keys do objeto, e renderizá-los na tabela;
  useEffect(() => {
    async function fetchResult() {
      const fetchData = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await fetchData.json();
      const filteredData = results.map((result) => {
        const resultFilter = result;
        delete resultFilter.residents;
        return resultFilter;
      });
      setPlanets(filteredData);
      const keys = Object.keys(filteredData[0]);
      setTitles(keys);
    }
    fetchResult();
  }, []);

  return { planets, setPlanets, titles };
}
