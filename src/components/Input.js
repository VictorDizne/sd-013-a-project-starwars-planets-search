import React, { useContext } from 'react';
import PlanetContext from '../contexts/PlanetContext';

export default function Input() {
  const { data, setData } = useContext(PlanetContext);
  if (!data) return null;

  return (
    <>
      <h1>{data.text}</h1>
      <input
        type="text"
        placeholder="Planeta"
        onChange={ (e) => setData({ ...data, text: e.target.value }) }
      />
    </>
  );
}
