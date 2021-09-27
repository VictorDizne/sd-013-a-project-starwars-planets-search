import React, { } from 'react';

const OrderFilter = () => (
  <div>
    <select
      data-testid="comparison-filter"
      name="comparison"
      onChange={ setComparisonOnChange }
      value={ comparisonOption }
    >
      {COMPARISON_OPTIONS.map((name) => (
        <option key={ htmlID({ name }) } value={ name }>{ name }</option>)) }
    </select>
  </div>
);

export default OrderFilter;
