import React from 'react';

export default function Table(props) {
  const name = props.filters.filterByName.name;
  // useEffect(() => <p>{name}</p>, [name]);
  return (
    <>
      {/* <p>{JSON.stringify(props.data)}</p> */}
      {console.log(props)}
      <p>{name}</p>
    </>
  );
}
