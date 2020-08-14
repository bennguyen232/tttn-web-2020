import React, {FC} from 'react';
import {Paper, Typography, Grid, makeStyles, Theme, createStyles} from '@material-ui/core';
// import InputSelectControl from '../components/InputSelectControl';
// import {useGlobalStyles, mulClasses} from '../utilities';

// type Props = {
//   dispatch: AppDispatch;
// } & ReturnType<typeof mapStateToProps>;

const SettingsScreen: FC = () => {
  const classes = useStyles();
  // const globals = useGlobalStyles();
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h6" component="h2">
          Settings
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={1} className={classes.content}>
          <Grid container item xs={12} spacing={2}>
            <Grid item xs>
              {/* <InputSelectControl /> */}
            </Grid>
            <Grid item xs>
              <Paper elevation={1}>xs</Paper>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

// const mapStateToProps = (state: RootState) => {
//   return {
//     globalRedux: selectors.globals.select(state),
//   };
// };

export default SettingsScreen;

const useStyles = makeStyles(({spacing}: Theme) =>
  createStyles({
    content: {
      padding: spacing(2),
    },
  }),
);
