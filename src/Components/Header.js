import React, { useState, useEffect } from 'react';
import MyContext from '../Context';
import Table from './Table';
import InputFilterName from './InputFilterName';
import SelectColumn from './SelectColumn';
import SelectComparison from './SelectComparison';
import InputValue from './InputValue';
import FilterButton from './FilterButton';
import OrderFunc from './FilterOrder';

const numberM = -1;
const columnOptions = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

const verifyArray = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

const filters = { filterByName: { name: '' } };

const values = { filterByNumericValues: [] };

const order = { column: 'name', sort: 'ASC' };

function Header() {
  const [headers, setHeaders] = useState([]); // 1
  const [data, setData] = useState([]);// 2
  const [stateName, setStateName] = useState(filters);// 3
  const [stateValue, setStateValue] = useState(values);// 4
  const [orderFilter, setOrderFilter] = useState(order); // 5

  const [stateColumn, setStateColumn] = useState('population');// 6
  const [stateComparison, setStateComparison] = useState('maior que');// 7
  const [stateValor, setStateValor] = useState('');// 8
  const [orderColumn, setOrderColumn] = useState('name'); // 9
  const [orderDirection, setOrderDirection] = useState('ASC'); // 10

  const [filterContainer, setFilterContainer] = useState(data);// 11

  const [columnOptionsFil, setColumnOptionsFil] = useState(columnOptions);// 12

  // Fetch da API salva no 'ESTADO' "data". Salva "HEADERS".
  useEffect(() => {
    const fetchAPIStar = async () => {
      const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(END_POINT);
      const result = await response.json();
      const headerFilter = Object.keys(result.results[0]);
      setHeaders(headerFilter.filter((el) => !el.includes('residents')));
      setData(result.results);
      setFilterContainer(result.results);
    };
    fetchAPIStar();
  }, []);
  // Fetch da API salva no 'ESTADO' "data". Salva "HEADERS".

  const filterName = (array) => {
    if (stateName.filterByName.name === '') {
      return array;
    }
    return array.filter((planeta) => (
      planeta.name.toLowerCase().includes(stateName.filterByName.name.toLowerCase())));
  };

  const filterValue = (array) => {
    if (stateValue.filterByNumericValues.length === 0) {
      return array;
    }
    let result = [];
    stateValue.filterByNumericValues.forEach(({ comparison, column, value }) => {
      if (comparison === 'maior que') {
        result = array.filter((planeta) => (
          Number(planeta[column]) > Number(value)));
      } else if (comparison === 'menor que') {
        result = array.filter((planeta) => (
          Number(planeta[column]) < Number(value)));
      } else {
        result = array.filter((planeta) => (
          Number(planeta[column]) === Number(value)));
      }
    });
    return result;
  };

  const sortAsc = (array) => {
    const { column } = orderFilter;
    array.sort((a, b) => {
      if (a[column] > b[column]) return 1;
      if (a[column] < b[column]) return numberM;
      return 0;
    });
    return array;
  };

  const testOrder = (array) => {
    const { column, sort } = orderFilter;
    if (verifyArray.some((el) => column === el)) {
      if (sort === 'ASC') {
        const result = [...array];
        result.sort((a, b) => +a[column] - +b[column]);
        return result;
      }
      const result = [...array];
      result.sort((a, b) => +a[column] - +b[column]);
      return result.reverse();
      // return sort === 'ASC'
      // ? (array.sort((a, b) => +a[column] - +b[column]))
      // : (array.sort((a, b) => +a[column] - +b[column]))
      // .reverse();
    }
    if (sort === 'ASC') return sortAsc(array);
    return sortAsc(array).reverse();
    // return sort === 'ASC'
    //   ? sortAsc(array)
    //   : sortAsc(array).reverse();
  };

  const applyFilters = () => {
    setFilterContainer(testOrder(filterValue(filterName(data))));
  };

  useEffect(applyFilters, [stateValue, stateName, orderFilter, data]);

  const handleName = ({ target }) => {
    setStateName({ ...stateName, filterByName: { name: target.value } });
  };

  const handleColumn = ({ target }) => {
    setStateColumn(target.value);
  };

  const handleComparison = ({ target }) => {
    setStateComparison(target.value);
  };

  const handleValue = ({ target }) => {
    setStateValor(target.value);
  };

  const handleOrder = ({ target }) => {
    setOrderDirection(target.value);
  };

  const handleOrderColumn = ({ target }) => {
    setOrderColumn(target.value);
  };

  const buttonClickOrder = () => {
    setOrderFilter({ column: orderColumn, sort: orderDirection });
  };

  const buttonClick = () => {
    setStateValue({ filterByNumericValues: [...stateValue.filterByNumericValues,
      { column: stateColumn,
        value: stateValor,
        comparison: stateComparison }] });
  };

  const selecRender = () => setColumnOptionsFil(columnOptionsFil
    .filter((el) => !stateValue.filterByNumericValues
      .some((le) => le.column === el)));

  useEffect(selecRender, [stateValue]);

  const deleteButton = ({ target }) => {
    setColumnOptionsFil([...columnOptionsFil, target.name]);
    const removeValue = stateValue.filterByNumericValues
      .filter((el) => el.column !== target.name);
    setStateValue({ filterByNumericValues: removeValue });
  };

  const contextValue = {
    filterContainer,
    columnOptionsFil,
    stateValue,
    headers,
    buttonClick,
    deleteButton,
    handleName,
    handleColumn,
    handleComparison,
    handleValue,
    handleOrder,
    handleOrderColumn,
    buttonClickOrder,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      <InputFilterName />
      <SelectColumn />
      <SelectComparison />
      <InputValue />
      <FilterButton />
      <OrderFunc />
      <table>
        <thead>
          <tr>
            {
              headers.map((el) => <th key={ el }>{el}</th>)
            }
          </tr>
        </thead>
        <Table />
      </table>
    </MyContext.Provider>
  );
}

export default Header;
