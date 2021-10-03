import React, { useContext } from 'react';
import PlanetContext from '../contexts/PlanetContext';

export default function TableFilter() {
  const { planetData, setPlanetData } = useContext(PlanetContext);
  if (!planetData) return null;

  return (
    <input
      className="planetFilter"
      type="text"
      placeholder="Planeta"
      onChange={
        (e) => setPlanetData({
          ...planetData,
          filters: { ...planetData.filters, filterByName: { name: e.target.value } },
        })
      }
    />
  );
}
