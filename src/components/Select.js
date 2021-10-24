import React from 'react';

export default function Select({ options, datatest, labeltext, name, onChange }) {
    return (
        <label htmlFor={name}>
            {labeltext}
            <select
                name={name}
                data-testid={datatest}
                onChange={onChange}
                id={name}
            >
                {options && options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </label>
    )
}