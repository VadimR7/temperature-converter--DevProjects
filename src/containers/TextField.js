import React from 'react';
import TextFieldStyle from '../styles/TextFieldStyle';

export default function TextField(props) {
  const handleOnChange = (e) => props.onChange(e.target.value);

  return (
      <TextFieldStyle
        label={props.label}
        value={props.value}
        onChange={handleOnChange}
      >
      </TextFieldStyle>
  );
}
