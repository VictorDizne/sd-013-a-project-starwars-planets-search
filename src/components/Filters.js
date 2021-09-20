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
          if (arrayNumericValues.length === 1) {
            setArrayNumericValues([{
              column: localColumn,
              comparison: localComparison,
              value: localValue,
            }]);
          } else {
            setArrayNumericValues([...arrayNumericValues, {
              column: localColumn,
              comparison: localComparison,
              value: localValue,
            }]);
          }
        } }
      >
        Pesquisar
      </button>
    </form>
  );
};

export default Filters;
