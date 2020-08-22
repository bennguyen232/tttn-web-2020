import React, {FC} from 'react';
import {Grid, TextField, Button, Paper} from '@material-ui/core';
import {useGlobalStyles, mulClasses} from '../utilities';
import {useForm, Controller} from 'react-hook-form';

export const SignInScreen: FC = () => {
  const globals = useGlobalStyles();
  const {control, handleSubmit} = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Grid container justify="center" alignItems="center" className={globals.p3}>
          <h1>Project Manager</h1>
        </Grid>
        <Paper elevation={2} className={mulClasses([globals.p2, globals.m1])}>
          <Grid container justify="center" alignItems="center" spacing={3}>
            <Grid
              container
              item
              xs={12}
              justify="center"
              alignItems="center"
              className={globals.p2}>
              <h4>Log in to your account</h4>
            </Grid>
            <Grid item xs={12}>
              <Controller
                control={control}
                render={({onChange, onBlur, value}) => (
                  <TextField
                    className={globals.w100}
                    label="Email"
                    variant="outlined"
                    onChange={(value) => onChange(value)}
                    value={value}
                    onBlur={onBlur}
                    // defaultValue={chossenIssue.summary}
                  />
                )}
                name="email"
                defaultValue=""
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                control={control}
                render={({onChange, onBlur, value}) => (
                  <TextField
                    className={globals.w100}
                    label="Password"
                    variant="outlined"
                    onChange={(value) => onChange(value)}
                    value={value}
                    onBlur={onBlur}
                    type="password"
                    autoComplete="current-password"
                    // defaultValue={chossenIssue.summary}
                  />
                )}
                name="password"
                defaultValue=""
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                className={globals.w100}
                onClick={handleSubmit(onSubmit)}>
                Sign in
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};
export default SignInScreen;
