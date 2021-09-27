import React from 'react';
import './App.css';
import Provider from './Contexto/Provider';
import Table from './Componentes/Table';
import Input from './Componentes/Input';

function App() {
  /* no return a seguir, englobamos todos os componentes que terão acesso ao estado do Provider, tornando-se assim, "filhos" do componente Provider: */
  return (
    <Provider>
      <Input />
      <Table />
    </Provider>
  );
}

export default App;
