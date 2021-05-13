import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginTop: 20,
    padding: 20,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
}));

export function FlexContainer(props) {
  const classes = useStyles();

  return (
    <div
      className={`
    ${classes.flexContainer}
  `}
    >
      {props.children}
    </div>
  );
}

const ComponentStyle = {
  FlexContainer,
};

export default ComponentStyle;