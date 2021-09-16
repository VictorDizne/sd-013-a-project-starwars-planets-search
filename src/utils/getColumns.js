function getColumns(planets) {
  const keys = planets[0] ? Object.keys(planets[0]) : [];
  const keysWithoutResidents = keys.filter((key) => key !== 'residents');

  return keysWithoutResidents;
}

export default getColumns;
