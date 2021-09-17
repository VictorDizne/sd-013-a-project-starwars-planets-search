import React from 'react';
import NameInput from './NameInput';
import NumericSearch from './NumericSearch';
import Order from './Order';

export default function SearchTab() {
  return (
    <div>
      <NameInput />
      <NumericSearch />
      <Order />
    </div>
  );
}
