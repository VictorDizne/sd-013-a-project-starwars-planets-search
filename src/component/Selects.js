// requisito 3 também foi realizado com o meu buddy Cassio Pereira, mas refiz o requisito pois não entendia sua lógica.

import React, { useState, useContext } from 'react';
import tableContext from '../context/tableContext';

function Select() {
  const { handleFilterByNumericValues } = useContext(tableContext);
  const [selectedFilters, setSelectedFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });
  const columns = [ // valores do select column
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  const [filterColumn, setFilterColumn] = useState(columns); // setando novo estado para pegar o estado do array columns para utilizar na funcao que filtra o que já foi utilizado

  const ColumnItems = () => { // funcao que mapeia os itens de column e retorna dentro da option do select o próprio ccada item do column
    const columnsMap = filterColumn
      .map((column) => <option key={ column }>{ column }</option>);
    return columnsMap;
  };

  const comparisonItems = () => { // funcao que mapeia os itens de comparison e retorna dentro da option do select cada item do comparison
    const comparison = ['maior que', 'menor que', 'igual a'];
    const comparisonMap = comparison
      .map((column) => <option key={ column }>{ column }</option>);
    return comparisonMap;
  };
  // QUANDO HÁ UM CLICK NO SELECT A FUNCAO EXECUTA:
  const handleChange = (event) => {
    // MUDANDO O ESTADO DO SELECT
    setSelectedFilters({
      ...selectedFilters,
      [event.target.name]: event.target.value,
    });
  };

  // assim que a funcao comecar já envia o valor do array para o estado

  // requisito 4 realizado com a ajuda de Lanai Conceição
  const removeSelectedItems = () => { // funcao responsavel por filtrar os valores já selecionados e removê-los da column para nao serem mais utilizados
    const filtersAllColumnItems = filterColumn
      .filter((itemColumn) => (itemColumn !== selectedFilters.column)); // filtro do que é diferente do que foi selecionado
    setFilterColumn(filtersAllColumnItems); // retornar para o estado o valor já filtrado.
  };

  const handleClick = () => {
    handleFilterByNumericValues(selectedFilters);
    removeSelectedItems(); // chamando a funcao que filtrou os itens já selecionados e passa para a funcao que realiza o click para que quando o usuário click no botao após marcar as suas options, o valor já seja filtrado.
  };

  return (
    <>
      <div>
        <label htmlFor="column">
          <select
            name="column"
            data-testid="column-filter"
            onChange={ handleChange }
          >
            {ColumnItems()}
          </select>

        </label>
      </div>
      <div>
        <label htmlFor="comparison">
          <select
            name="comparison"
            data-testid="comparison-filter"
            onChange={ handleChange }
          >
            {comparisonItems()}
            {handleChange}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="value">
          <input
            type="number"
            name="value"
            data-testid="value-filter"
            onChange={ handleChange }
          />
        </label>
      </div>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        click
      </button>
    </>
  );
}
export default Select;
