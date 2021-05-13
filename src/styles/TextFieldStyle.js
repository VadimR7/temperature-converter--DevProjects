import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      display: 'none',
    },
    '& > *': {
      margin: theme.spacing(1),
      width: '27ch',
    },
  },
}));

export default function TextFieldStyle({label, value, onChange, children}) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <TextField
          label={label}
          value={value}
          type='text'
          onChange={onChange}
        >
          {children}
        </TextField>
      </div>
    </>
  );
}