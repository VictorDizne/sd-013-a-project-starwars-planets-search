import React, { useContext } from 'react';
import appContext from '../context/appcontext';

const OrderColumn = () => {
  const {
    options,
    typeOrdenation,
    setOrdenation,
    check2,
    setCheck2,
    button,
    setButton,
  } = useContext(appContext);

  const c = true;
  const c2 = false;

  return (
    <div>
      <select
        value={ typeOrdenation }
        data-testid="column-sort"
        onChange={ (e) => setOrdenation(e.target.value) }
      >
        {options.map((opt) => (
          <option key={ opt }>
            {opt}
          </option>
        ))}
      </select>
      <label htmlFor="ASC">
        ASC
        <input
          type="radio"
          id="ASC"
          name="ASC"
          data-testid="column-sort-input-asc"
          value="ASC"
          checked={ check2 !== 'ASC' ? c2 : c }
          onChange={ ({ target: { value } }) => setCheck2(value) }
        />
      </label>
      <label htmlFor="DSC">
        DSC
        <input
          type="radio"
          id="DSC"
          name="DSC"
          data-testid="column-sort-input-desc"
          value="DESC"
          checked={ check2 !== 'DESC' ? c2 : c }
          onChange={ ({ target: { value } }) => setCheck2(value) }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => setButton(button + 1) }
      >
        Aplicar
      </button>
    </div>
  );
};

export default OrderColumn;
