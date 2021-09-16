import React from 'react';

import '../styles/filtersInputs.css';

import NameFilter from './sub_components/NameFilter';
import NumberFilters from './sub_components/NumberFilters';
import OrderFilters from './sub_components/OrderFilters';

export default function FiltersInputs() {
  return (
    <form className="container_form-FiIn">
      <NameFilter />
      <OrderFilters />
      <NumberFilters />
    </form>
  );
}
