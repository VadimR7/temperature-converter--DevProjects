import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    padding: 20,
    textAlign: 'center',
    width: '100%',
  },
  flexContainer: {
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
}));

export function GridContainer(props) {
  const classes = useStyles();

  return (
    <>
      <Grid container alignContent='center'>
        <Grid item xs={1} sm={2} lg={3}></Grid>
        <Grid item xs={10} sm={8} lg={6}>
          <div className={classes.flexContainer}>
            {props.children}
          </div>
        </Grid>
        <Grid item xs={1} sm={2} lg={3}></Grid>
      </Grid>
    </>
  );
}

export function FlexContainer(props) {
  const classes = useStyles();

  return (
    <div className={classes.flexContainer}>
      {props.children}
    </div>
  );
}

export function PaperContainer(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={3}>
      {props.children}
    </Paper>
  );
}

const AppStyle = {
  PaperContainer,
  GridContainer,
  // FlexContainer
};

export default AppStyle;
