import React from 'react';
import {makeStyles, createStyles, Theme, Paper, TextField, Grid} from '@material-ui/core';
import {HeightHeader} from '../../assets/constants';
import CreateIssue from './CreateIssue';

const Header = () => {
  const classes = useStyles();
  return (
    <Paper elevation={2} className={classes.container}>
      <Grid container spacing={1} alignItems="center">
        <Grid container item xs={8}>
          <div className={classes.logo}>
            <img src="/images/dayone-logo.png" alt="logo" />
          </div>
          <ul className={classes.nav}>
            <li className={classes.navItem}>Your work</li>
            <li className={classes.navItem}>Project</li>
            <li>
              <CreateIssue />
            </li>
          </ul>
        </Grid>
        <Grid container item xs={4} justify="flex-end">
          <TextField
            id="input-with-icon-grid"
            className={classes.txtSearch}
            size="small"
            variant="outlined"
            label="Search"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Header;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      position: 'relative',
      height: HeightHeader,
      zIndex: theme.zIndex.appBar,
      alignItems: 'center',
      padding: `0 ${theme.spacing(2)}px`,
    },
    logo: {
      maxWidth: 125,
      '& img': {
        width: '100%',
      },
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
    },
    navItem: {
      margin: `0 ${theme.spacing(1)}px`,
      fontWeight: 'bold',
    },
    navItemActive: {
      color: theme.palette.info.dark,
    },
    txtSearch: {
      '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
          borderColor: theme.palette.grey[500],
        },
      },
    },
  }),
);
