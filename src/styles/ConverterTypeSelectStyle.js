import React from 'react';
import { FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 200,
    fontSize: 40,
  },
}));

export default function ConverterTypeSelectStyle(props) {
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
