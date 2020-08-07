import React, {Component, FC} from 'react';
import {makeStyles, Theme, createStyles, Grid, Paper} from '@material-ui/core';
import Header, {HeightHeader} from '../components/Header';
import MenuLeft from '../components/MenuLeft';

const withMenu = (wrappedComponent: Component | FC) => {
  const WrappedComponent = wrappedComponent as any;
  const HocComponent: FC = ({...props}) => {
    const classes = useStyles();
    return (
      <div className={classes.container}>
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={2}>
              <MenuLeft />
            </Grid>
            <Grid container item xs={10}>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.wrapped}>
                  <WrappedComponent {...props} />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  };
  return HocComponent;
};

export default withMenu;
export const HeightWrapped = window.innerHeight - HeightHeader;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      background: theme.palette.background.default,
      minHeight: '100vh',
      overflow: 'hidden',
    },
    wrapped: {
      height: HeightWrapped,
      background: theme.palette.background.default,
      padding: theme.spacing(1),
      overflowX: 'hidden',
      overflowY: 'auto',
    },
  }),
);
