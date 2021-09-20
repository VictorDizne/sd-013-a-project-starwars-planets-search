import React from 'react';
import MyContext from './MyContext'

function Provider(props) {
  const { children } = props;

  return (
    <MyContext.Provider value={}>

    </MyContext.Provider>
  );
}

export default Provider;
