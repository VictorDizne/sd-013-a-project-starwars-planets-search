import React, { useContext } from 'react';
import ContextSwapi from '../context/ContextSwapi';

export default function Table() {
  const { test } = useContext(ContextSwapi);
  return (
    <div>
      <h1>Hello World!</h1>
      <h1>{test}</h1>
    </div>
  );
}
