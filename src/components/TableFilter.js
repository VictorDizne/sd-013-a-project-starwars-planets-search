import React, { useContext } from 'react';
import PlanetContext from '../contexts/PlanetContext';

export default function TableFilter() {
  const { SWAPI, setSWAPI } = useContext(PlanetContext);
  if (!SWAPI) return null;

  return (
    <input
      className="planetFilter"
      type="text"
      placeholder="Planeta"
      onChange={ (e) => setSWAPI({ ...SWAPI, text: e.target.value }) }
    />
  );
}
