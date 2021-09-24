import React, { useContext } from 'react';
import StarWarsContext from '../context';

const Filters = () => {
  const contextValue = useContext(StarWarsContext);
  const { filters: { filterByName: { name } }, handleInput } = contextValue;
  const { data, setFiltered } = contextValue;
  const { column, value, comparision, setColumn, setValue,
    setComparision } = contextValue;
  const { setDataArray, dataArray } = contextValue;
  const { arrayOptions, setArrayOptions } = contextValue;

  // Funcao para filtrar os filtros selecionados
  const selectedFilter = () => {
    const newArray = [];
    switch (comparision) {
    case 'maior que':
      data.filter((result) => Number(result[column]) > Number(value))
        .map((final) => newArray.push(final));
      setFiltered(newArray);
      break;

    case 'menor que':
      data.filter((result) => Number(result[column]) < Number(value))
        .map((final) => newArray.push(final));
      setFiltered(newArray);
      break;

    case 'igual a':
      data.filter((result) => Number(result[column]) === Number(value))
        .map((final) => newArray.push(final));
      setFiltered(newArray);
      break;

    default:
      return data;
    }
  };

  // Funcao para alterar o estado do dataArray + chamar Funcao de filtro
  const handleOnClickFinal = () => {
    let newArrayData = [];
    arrayOptions.forEach((option, index) => {
      if (option === column) {
        arrayOptions.splice(index, 1);
        setArrayOptions(arrayOptions);
      }
    });
    if (dataArray.length === 0) {
      newArrayData.push({ column, comparision, value });
      setDataArray(newArrayData);
    } else {
      newArrayData = { column, comparision, value };
      setDataArray([...dataArray, newArrayData]);
    }

    selectedFilter();
  };

  return (
    <main>
      <label htmlFor="name">
        {' '}
        Filtre por palavra:
        <input
          id="name"
          value={ name }
          data-testid="name-filter"
          onChange={ (e) => handleInput(e.target.value) }
        />
      </label>
      <div>
        <label htmlFor="column">
          <select
            name="column"
            id="column"
            value={ column }
            data-testid="column-filter"
            onChange={ (e) => setColumn(e.target.value) }
          >
            {arrayOptions.map((a) => (<option key={ a } value={ a }>{a}</option>))}
          </select>
        </label>
        <label htmlFor="comparision">
          <select
            name="comparision"
            id="comparision"
            value={ comparision }
            data-testid="comparison-filter"
            onChange={ (e) => setComparision(e.target.value) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="value">
          <input
            data-testid="value-filter"
            type="number"
            name="value"
            onChange={ (e) => setValue(e.target.value) }
            value={ value }
            id="value"
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => handleOnClickFinal() }
        >
          Adicionar filtro
        </button>
      </div>
    </main>

  );
};

export default Filters;
