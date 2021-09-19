import React, { useContext, useEffect, useState } from 'react';
import TableContext from './tableContext';
import Selects from '../component/Selects';

function Table() {
  const {
    data: { results },
    loading,
    handleFilterByName,
    filter,
  } = useContext(TableContext); // TENDO ACESSO A TUDO QUE FOI PASSANDO NO VALUE DO PROVIDER
  const [planetsInfo, setPlanetsInfo] = useState([]); // CRIANDO USESTATE PARA O ESTADO DO PLANETINFO E SETPLANETINFO

  // COMPONENDIDMOUNT
  useEffect(() => {
    const getPlanetsInfo = () => { // PEGANDO AS INFORMACOES DOS PLANETAS
      if (results[0]) { // SE RESULTS NAO FOR UM ARRAY VAZIO
        const planets = results.map((planet) => { // FAZ UM MAP NO ARRAY DE RESULTS
          delete planet.residents; // DELETA A KEY RESIDENTS (PEDIDO PELA QUESTAO)
          return ({ ...planet }); // RETORNA OS PLANETAS ANTERIORES
        });
        setPlanetsInfo(planets); // SETANDO O ESTADO DOS PLANETAS SEM A KEY RESIDENTS
      }
    };
    getPlanetsInfo(); // CHAMA A FUNCAO
  }, [results]); // PASSAR RESULTS DENTRO DO ARRAY.

  const filterByName = () => {
    const { filters: { filterByName: { name: filterName } } } = filter;
    const filteredPlanetsByName = planetsInfo // PEGA O ESTADO PLANETSINFO E FILTRA
      .filter(({ name }) => name.toLowerCase().includes(filterName)); // VERIFICA SE O NOME ESTÁ INCLUSO EM FILTERNAME

    return filteredPlanetsByName;
  };

  const filterBySelect = (filteredPlanetsByName) => {
    const { filters: { filterByNumericValues } } = filter;

    if (!filterByNumericValues || filterByNumericValues.length === 0) {
      return filteredPlanetsByName;
    }

    const { comparison, value, column } = filterByNumericValues[0];

    if (comparison === 'maior que') {
      return filteredPlanetsByName.filter((item) => {
        const valorParaSeComparar = Number(item[column]);

        return valorParaSeComparar > Number(value);
      });
    }

    if (comparison === 'menor que') {
      return filteredPlanetsByName.filter((item) => {
        const valorParaSeComparar = Number(item[column]);

        return valorParaSeComparar < Number(value);
      });
    }

    if (comparison === 'igual a') {
      return filteredPlanetsByName.filter((item) => {
        const valorParaSeComparar = Number(item[column]);

        return valorParaSeComparar === Number(value);
      });
    }
  };

  const renderPlanetRow = () => { // FUNCAO QUE RENDERIZA AS INFORMACOES DE CADA PLANETA NAS LINHAS
    const filteredPlanetsByName = filterByName();
    const planetsFilteredByNumericValues = filterBySelect(filteredPlanetsByName);

    return planetsFilteredByNumericValues.map((planet) => { // RETORNA A VARIAVEL FAZENDO UM MAP NOS PLANETAS FILTRADOS
      const plantetInfos = Object.values(planet); // PEGANDO PLANETA POR PLANETA E VENDO SE O VALOR DELE CONTEM PLANETA
      return ( // RETORNA A TABELA PASSANDO COMO KEY O NOME DO PLANETA
        <tr key={ planet.name }>
          {plantetInfos.map((info) => <td key={ info }>{info}</td>)}
        </tr>); // PEGA AS INFORMACOES DE CADA PLANETA E PASSA NO ELEMENTO
    });
  };

  return ( // SE LOADING ESTIVER RODANDO, RENDERIZA `LOADING...`
    <div>
      {loading && <h1>Loading...</h1>}
      {planetsInfo[0] && ( // SE HOUVER ALGO NO ARRAY PLANETSINFO, RENDERIZA.
        <>
          <label htmlFor="planet-name">
            Nome:
            <input
              data-testid="name-filter"
              onChange={ (e) => handleFilterByName(e.target.value) } // TODA VEZ QUE O INPUT MUDAR, CHAMA A FUNCAO QUE RECEBE O EXATO VALOR QUE ESTA SENDO PASSADO PELO USUARIO
              type="text"
              id="planet-name"
              placeholder="Eg: Tatooine"
            />
          </label>
          <Selects />
          <table>
            <thead>
              <tr>
                {Object.keys(planetsInfo[0]).map((info) => <th key={ info }>{info}</th>)}
              </tr>
            </thead>
            <tbody>
              {renderPlanetRow()}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Table;
