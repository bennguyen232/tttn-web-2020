import React from 'react';
import {makeStyles, createStyles, Theme, Paper} from '@material-ui/core';
import withMenu from './hocs/onlyLogin';

function CenteredGrid() {
  const classes = useStyles();

  return <Paper elevation={0} className={classes.container}></Paper>;
}

export default withMenu(CenteredGrid);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {},
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);
