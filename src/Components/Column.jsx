import React, { useContext } from 'react';
import Context from '../Context/Context';

const Column = () => {
  const { filtros: { filterByNumericValues }, setFiltros } = useContext(Context);
  const removeFilter = ({ name }) => {
    const remove = filterByNumericValues.filter((value) => value.column !== name);
    console.log(name);
    setFiltros((prev) => (({ ...prev,
      filterByNumericValues: remove,
    })));
  };
  return (
    <div>
      {(filterByNumericValues.length > 0) && filterByNumericValues
        .map((element, index) => (
          <div key={ index }>
            <p>{element.column}</p>
            <p>{element.comparison}</p>
            <p>{element.value}</p>
            <button
              data-testid="filter"
              type="button"
              name={ element.column }
              onClick={ (e) => removeFilter(e.target) }
            >
              Apagar
            </button>
          </div>
        ))}
    </div>
  );
};
export default Column;
