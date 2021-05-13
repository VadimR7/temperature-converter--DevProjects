import React from 'react';
import { InputLabel, Select } from '@material-ui/core';
import ConverterTypeSelectStyle from '../styles/ConverterTypeSelectStyle';

export default function ConverterTypeSelect(props) {

  const handleOnChange = e => props.onChange(e.target.value)

  return (
    <ConverterTypeSelectStyle>
        <InputLabel shrink htmlFor="age-native-simple">
          Select the conversion
        </InputLabel>
        <Select
          native
          value={props.value}
          onChange={handleOnChange}
        >
          {props.options.map((item, i) => {
            return <option key={i} value={item}>{item}</option>
          })}
        </Select>
    </ConverterTypeSelectStyle>
  );
}
