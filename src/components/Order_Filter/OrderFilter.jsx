import React, { useState } from 'react';

const OrderFilter = () => {
  const { planets } = useContext(PlanetContext);

  const COLUMN_NAMES = Object.keys({ ...planets[0] })
    .map((column) => column !== 'residents'); // Pelo requisito  a coluna residents não deve ser exibida

  const [columnOption, setColumnOption] = useState[(COLUMN_NAMES[0])];
  return (
    <div>
      <select
        data-testid="column-sort"
        name="columm"
        onChange={ ({ target: { value } }) => setColumnOption(value) }
        value={ columnOption }
      >
        {COLUMN_NAMES.map((name) => (
          <option key={ htmlID({ name }) } value={ name }>{ name }</option>)) }
      </select>
    </div>);
};

export default OrderFilter;
