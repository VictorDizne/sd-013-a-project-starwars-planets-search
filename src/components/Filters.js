import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { columns, comparisons } from '../data';
import Input from './Input';

const Filters = () => {
  const { contextValue } = useContext(AppContext);
  const { setName, setArrayNumericValues, arrayNumericValues } = contextValue;

  const [localColumn, setlocalColumn] = useState('population');
  const [localComparison, setlocalComparison] = useState('maior que');
  const [localValue, setlocalValue] = useState('100000');
  const [options, setOptions] = useState(columns);

  const removeFilter = (filterName) => {
    setArrayNumericValues(arrayNumericValues
      .filter((filter) => filter.column !== filterName));
  };

  return (
    <form>
      <h1>Filtros</h1>
      <Input
        propsObject={ { id:
          'name',
        type: 'text',
        name: 'Nome: ',
        testId: 'name-filter',
        onChange: (e) => setName(e.target.value) } }
      />
      <Input
        propsObject={ { id:
          'column',
        type: 'select',
        name: 'Paramêtro: ',
        testId: 'column-filter',
        onChange: (e) => setlocalColumn(e.target.value),
        data: options } }
      />
      <Input
        propsObject={ { id:
          'comparison',
        type: 'select',
        name: 'Comparação: ',
        testId: 'comparison-filter',
        onChange: (e) => setlocalComparison(e.target.value),
        data: comparisons } }
      />
      <Input
        propsObject={ { id:
          'value',
        type: 'number',
        name: 'Valor: ',
        testId: 'value-filter',
        onChange: (e) => setlocalValue(e.target.value) } }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => {
          setOptions(options.filter(((e) => e !== localColumn)));
          setlocalColumn(options[1]);
          setArrayNumericValues([...arrayNumericValues, {
            column: localColumn,
            comparison: localComparison,
            value: localValue,
          }]);
        } }
      >
        Pesquisar
      </button>
      {arrayNumericValues.map((numericValue) => (
        // Código inspirado no projeto do Felipe Lima https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/45
        // Anteriormente eu apenas renderizava um button
        // O avaliador não reconhecia o data-testID
        // Acredito por separar o nome da coluna do 'x' passou a funcionar
        <div data-testid="filter" key={ numericValue.column }>
          <span>{numericValue.column}</span>
          <button
            onClick={ () => removeFilter(numericValue.column) }
            type="button"
          >
            x
          </button>
        </div>
      ))}
    </form>
  );
};

export default Filters;
