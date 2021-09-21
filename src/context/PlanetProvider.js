// projeto realizado em dupla com Luiz Casimiro
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [tableData, setTableData] = useState([]); // armazena o resultado do fetch inicial da requisição da api
  const [filteredPlanets, setFilteredPlanets] = useState([]); // armazena o array de objetos com planetas já filtrados
  const [inputName, setInputName] = useState(''); // armazena a digitação no input de nome do planeta
  const [inputColumn, setInputColumn] = useState(''); // armazena o select inputColumn dos filtros
  const [inputComparison, setInputComparison] = useState(''); // armazena o inputComparison dos filtros
  const [inputValue, setInputValue] = useState(''); // armazena o inputValue dos filtros
  const [filterByNumericValues, setFilterByNumericValues] = useState([]); // armazena os valores dos filtros inputColum, inputComparison e inputValue

  // filters: objeto utilizado para setar os parâmetros dos planetas que serão listados no map
  // const [filters, setFilters] = useState(
  //   {
  //     filterByName: {
  //       name: '',
  //     },
  //     filterByNumericValues: [
  //       {
  //         column: '',
  //         comparison: '',
  //         value: '',
  //       },
  //     ],
  //   },
  // );

  // fetch com a requisição da api, trazendo o array de objetos com os planetas, realizado no primeiro render, salvando no tableData
  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      return data.results;
    };
    fetchResults().then((results) => setTableData(results));
  }, []);

  // useEffect acionado toda vez que tableData é alterado ou filtrado, salvando o novo array de objetos em filteredPlanets
  useEffect(() => {
    setFilteredPlanets(tableData);
  }, [tableData]);

  // useEffect acionado sempre que inputName recebe um novo valor e realiza o filtro dos planetas, salvando o novo array em filteredPlanets
  useEffect(() => {
    const filteredPlanetsByText = tableData
      .filter((planet) => planet.name.toLowerCase().includes(inputName.toLowerCase()));
    setFilteredPlanets(filteredPlanetsByText);
  }, [inputName, tableData]);

  // handleName acionado no input, salvando a digitação no filters, name
  const handleName = ({ target: { value } }) => {
    setInputName(value);
    // setFilters({
    //   ...filters,
    //   filterByName: { [name]: value },
    // });
  };

  // handleColumn acionado no select, salvando a seleção no filters, column
  const handleColumn = ({ target: { value } }) => {
    setInputColumn(value);
    // setFilters({
    //   ...filters,
    //   filterByNumericValues: [{
    //     [name]: value,
    //     comparison: inputComparison,
    //     value: inputValue,
    //   }],
    // });
  };

  // handleComparison acionado no select, salvando a seleção no filters, comparison
  const handleComparison = ({ target: { value } }) => {
    setInputComparison(value);
    // setFilters({
    //   ...filters,
    //   filterByNumericValues: [{
    //     column: inputColumn,
    //     [name]: value,
    //     value: inputValue,
    //   }],
    // });
  };

  // handleValue acionado no input, salvando a digitação no filters, value
  const handleValue = ({ target: { value } }) => {
    setInputValue(value);
    // setFilters({
    //   ...filters,
    //   filterByNumericValues: [{
    //     column: inputColumn,
    //     comparison: inputComparison,
    //     [name]: value,
    //   }],
    // });
  };

  // handleClick acionado ao clicar no botão filtrar, recebe os valores dos inputs numeric numbers. Ao entrar em um case, salva o novo array de objetos em filteredPlanets.
  const handleClick = (inputColumn2, inputComparison2, inputValue2) => {
    switch (inputComparison2) {
    case 'maior que':
      setFilteredPlanets(filteredPlanets
        .filter((planet) => +planet[inputColumn2] > +inputValue2));
      break;

    case 'menor que':
      setFilteredPlanets(filteredPlanets
        .filter((planet) => +planet[inputColumn2] < +inputValue2));
      break;

    case 'igual a':
      setFilteredPlanets(filteredPlanets
        .filter((planet) => +planet[inputColumn2] === +inputValue2));
      break;

    default:
      return setFilteredPlanets(filteredPlanets);
    }

    // ao sair do switch case, os valores dos campos numericos são salvos na chave filterByNumericValues.
    setFilterByNumericValues([
      ...filterByNumericValues,
      {
        column: inputColumn,
        comparison: inputComparison,
        value: inputValue,
      },
    ]);
  };

  // valore enviados para store, para serem consumidos pelos componentes
  const planetValue = {
    tableData,
    filteredPlanets,
    inputName,
    inputColumn,
    inputComparison,
    inputValue,
    filterByNumericValues,
    handleName,
    handleColumn,
    handleComparison,
    handleValue,
    handleClick,
  };

  return (
    <PlanetContext.Provider value={ planetValue }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
