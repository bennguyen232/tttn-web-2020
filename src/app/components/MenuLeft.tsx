import React, {FC, useState} from 'react';
import {makeStyles, Theme, createStyles, Paper, Grid} from '@material-ui/core';
import {Link, useLocation} from 'react-router-dom';
import {HeightWrapped} from '../../assets/constants';
import {routersContentHome} from '../router/Routers';

const MenuLeft: FC = () => {
  const classes = useStyles();
  const [url, setUrl] = useState('');

  const location = useLocation();
  React.useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  const _renderItems = () => {
    const values = Object.values(routersContentHome);
    return values.map((item, index) => {
      const {path, name} = item;
      const strActive = url === path ? ' active' : '';
      const className = classes.item + strActive;
      return (
        <li key={index} className={className}>
          <Link to={path || '/'}> {name}</Link>
        </li>
      );
    });
  };

  return (
    <Paper elevation={6} className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h2>Project Name</h2>
        </Grid>
        <Grid item xs={12}>
          <ul className={classes.items}>{_renderItems()}</ul>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MenuLeft;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(1),
      background: theme.palette.grey[100],
      height: HeightWrapped,
    },
    items: {
      padding: theme.spacing(1),
      borderTop: `1px solid ${theme.palette.grey[400]}`,
    },
    item: {
      '& a': {
        fontWeight: 500,
        color: theme.palette.grey.A400,
        padding: theme.spacing(1),
        display: 'block',
      },
      '&:hover': {
        background: theme.palette.grey[200],
        cursor: 'pointer',
      },
      '&.active': {
        background: theme.palette.grey[300],
      },
    },
  }),
);
