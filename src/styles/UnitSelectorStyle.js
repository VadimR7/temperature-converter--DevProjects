import React from 'react';
import { FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    display: 'flex',
    minWidth: 200,
    backgroundColor: '#f5f2f2',
  },
}));

export default function UnitSelectorStyle(props) {
  const classes = useStyles();

  return (
    <>
      <FormControl
        className={`
        ${classes.formControl}
      `}
      >
        {props.children}
      </FormControl>
    </>
  );
}
