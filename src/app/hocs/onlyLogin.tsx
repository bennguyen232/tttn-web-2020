import React, {Component, FC} from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core';

const withMenu = (wrappedComponent: Component | FC) => {
  const WrappedComponent = wrappedComponent as any;
  const HocComponent: FC = ({...props}) => {
    const classes = useStyles();
    return (
      <section className={classes.root}>
        <WrappedComponent {...props} />
      </section>
    );
  };
  return HocComponent;
};

export default withMenu;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.background.default,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);
