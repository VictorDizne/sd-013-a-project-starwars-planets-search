import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { columns, comparisons } from '../data';
import Input from './Input';

const Filters = () => {
  const { contextValue } = useContext(AppContext);
  const { setName, setColumn, setComparison, setValue } = contextValue;

  const [localColumn, setlocalColumn] = useState('population');
  const [localComparison, setlocalComparison] = useState('maior que');
  const [localValue, setlocalValue] = useState('100000');

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
        data: columns } }
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
          setColumn(localColumn);
          setComparison(localComparison);
          setValue(localValue);
        } }
      >
        Pesquisar
      </button>
    </form>
  );
};

export default Filters;
