import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import usePlanets from '../Hooks/fetchHook';

function Provider({ children }) {
  // desestruturamos de usePlanets(hook personalizado p/ fetch) o estado planets, a função para alterar planets a setPlanets() e o estado titles:
  const { planets, setPlanets, titles } = usePlanets();

  // criamos um novo estado nameFilter passando como valor inicial uma string vazia:
  const [nameFilter, setNameFilter] = useState('');

  const [column, setColumnFilter] = useState('population');
  const [comparison, setComparisonFilter] = useState('maior que');
  const [valor, setValorFilter] = useState(0);

  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  // lógica para resgatarmos o valor digitado no ../Input.js, e guardar esse valor na chave nameFilter criada anteriormente:
  const handleChange = ({ target: { value } }) => {
    setNameFilter(value);
  };

  const handleClick = (value) => {
    setFilterByNumericValues([...filterByNumericValues, value]);
  };

  // aqui criamos um objeto que vai conter todas as informações que serão compartilhadas pelo Provider para os componentes filhos ({children}).
  const contextValue = {
    nameFilter,
    handleChange,
    handleClick,
    planets,
    setPlanets,
    titles,
    setColumnFilter,
    setComparisonFilter,
    setValorFilter,
    column,
    comparison,
    valor,
    setFilterByNumericValues,
    filterByNumericValues,
  };

  /* Abaixo, temos o retorno do Provider, onde ele engloba uma chave reservada do Context chamada children. No ./App.js importamos este arquivo inteiro e o passamos no return englobando todos os componentes(children) que terão acesso a chave value declarada. A chave displayName serve para utilizarmos a extensão no Chrome: */
  return (
    <MyContext.Provider value={ contextValue } displayName="Context Display Name">
      {children}
    </MyContext.Provider>
  );
}

// PropTypes:
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
