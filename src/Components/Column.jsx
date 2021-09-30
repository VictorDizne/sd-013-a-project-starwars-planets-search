import React, { useContext } from 'react';
import Context from '../Context/Context';

const Column = () => {
  const { filtros: { filterByNumericValues }, setFiltros } = useContext(Context);
  const removeFilter = ({ name }) => {
    const remove = filterByNumericValues.filter((value) => value.column !== name);
    setFiltros((prev) => (({ ...prev,
      filterByNumericValues: remove,
    })));
  };
  return (
    <div>

      {(filterByNumericValues.length > 0) && filterByNumericValues
        .map((element, index) => (
          <div key={ index } data-testid="filter">
            <p>{element.column}</p>
            <p>{element.comparison}</p>
            <p>{element.value}</p>
            <button
              type="button"
              name={ element.column }
              onClick={ (e) => removeFilter(e.target) }
            >
              x
            </button>
          </div>
        ))}
    </div>
  );
};
export default Column;
