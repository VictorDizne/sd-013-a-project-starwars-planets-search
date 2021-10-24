import React, { useContext, useState, useEffect } from 'react';
import MyContext from '../context/Context';
import Input from './Input';
import Select from './Select';
import useFilterNumeric from '../hooks/useFilterNumeric';
import FilterCard from './FilterCard';

export default function FilterBar() {
    const { setFilterName, setFilterNumeric, filterNumeric, filterCard, setFilterCard } = useContext(MyContext);
    const [options, setOptions] = useState(['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

    const [handleFilter] = useFilterNumeric();

    function searchChange({ target: { value } }) {
        setFilterName(value);
    }

    function handleChange({ target: { value, name } }) {
        setFilterNumeric({
            ...filterNumeric,
            [name]: value,
        });
    }

    function handleClick() {
        handleFilter();
        const filterColumn = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
        setOptions(filterColumn.filter((column) => column !== filterNumeric.column));

        setFilterCard([...filterCard, <FilterCard comparison={filterNumeric.comparison} value={filterNumeric.value} column={filterNumeric.column} />])
    }

    return (
        <div>
            <Input 
                type="text"
                onChange={searchChange}
                test="name-filter"
                name="Search"
            />
            <Select
                options={options}
                onChange={handleChange}
                datatest="column-filter"
                name="column"
                labeltext="Column"
            />
            <Select 
                options={['maior que', 'igual a', 'menor que']}
                onChange={handleChange}
                datatest="comparison-filter"
                name="comparison"
                labeltext="Comparison"
            />
            <Input 
                type="number"
                onChange={handleChange}
                test="value-filter"
                name="value"
                labeltext="Value"
            />
            <button
            data-testid="button-filter"
            onClick={handleClick}
            >
                Filtrar
            </button>
            {filterCard}
        </div>
    )

}