import React from 'react';
import NamePlanet from './NamePlanet';
import NumberPlanet from './NumberPlanet';
import OrderColumnsPlanet from './OrderColumnsPlanet';

export default function FilterPlanetAndNumber() {
  return (
    <div>
      <NamePlanet />
      <NumberPlanet />
      <OrderColumnsPlanet />
    </div>
  );
}
