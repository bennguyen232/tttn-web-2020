import React, {FC, useState} from 'react';
import {makeStyles, Theme, createStyles, Paper, Grid} from '@material-ui/core';
import {HeightWrapped} from '../hocs/onlyLogin';

interface Item {
  name: string;
  event?: () => void;
}

const MenuLeft: FC = () => {
  const classes = useStyles();
  const [itemsMenu] = useState<Item[]>([
    {name: 'All Issues'},
    {name: 'Open Issues'},
    {name: 'My Issues'},
  ]);

  const _renderItem = () => {
    return itemsMenu.map((item, index) => {
      return (
        <li key={index} className={classes.item}>
          {item.name}
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
          <ul className={classes.items}>{_renderItem()}</ul>
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
      fontWeight: 500,
      color: theme.palette.grey.A400,
      padding: theme.spacing(1),
      '&:hover': {
        background: theme.palette.grey[200],
        cursor: 'pointer',
      },
    },
  }),
);
