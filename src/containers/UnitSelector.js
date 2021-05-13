import React from 'react';
import { Select, MenuItem } from '@material-ui/core';
import UnitSelectorStyle from '../styles/UnitSelectorStyle';

export default function UnitSelector({ value, options, onChange, moduleUnits }) {

  const handleOnChange = e => onChange(e.target.value)

  return (
    <UnitSelectorStyle>
        <Select
          style={{height: 30}}
          value={value}
          onChange={handleOnChange}
        >
          {options.map((item, i) => {
            return (
              <MenuItem value={item} key={i}>{moduleUnits[item]}</MenuItem>
            )
          })}
        </Select>
    </UnitSelectorStyle>
  );
}
