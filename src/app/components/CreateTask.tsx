import React, {FC, useState} from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  Button,
  Icon,
  Modal,
  Backdrop,
  Fade,
  Grid,
  Paper,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  TextareaAutosize,
} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import {useGlobalStyles} from '../utilities';
import {useForm, Controller} from 'react-hook-form';

const CreateTask: FC = () => {
  const classes = useStyles();
  const global = useGlobalStyles();
  const [open, setOpen] = useState(true);
  const {control, handleSubmit} = useForm();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        endIcon={<Icon>add</Icon>}
        onClick={handleOpen}>
        Create
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <Paper elevation={2} className={classes.paper}>
            <Grid container>
              <Grid item xs={12} className={global.py2}>
                <Typography variant="subtitle1" component="h4">
                  Create Issue
                </Typography>
              </Grid>
              <Grid container item spacing={3}>
                <Grid item xs={12} spacing={2}>
                  <Controller
                    control={control}
                    render={({onChange, onBlur}) => (
                      <Autocomplete
                        options={[1, 2, 3]}
                        getOptionLabel={(option) => {
                          onChange(option);
                          return option.toString();
                        }}
                        style={{width: 300}}
                        onBlur={onBlur}
                        renderInput={(params) => (
                          <TextField {...params} label="Project" variant="outlined" />
                        )}
                      />
                    )}
                    name="nameProject"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    control={control}
                    render={({onChange, onBlur}) => (
                      <Autocomplete
                        options={[1, 2, 3]}
                        getOptionLabel={(option) => {
                          onChange(option);
                          return option.toString();
                        }}
                        style={{width: 300}}
                        onBlur={onBlur}
                        renderInput={(params) => (
                          <TextField {...params} label="Issue Type" variant="outlined" />
                        )}
                      />
                    )}
                    name="issueType"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    control={control}
                    render={({onChange, onBlur, value}) => (
                      <TextField
                        className={global.w100}
                        label="Summary"
                        variant="outlined"
                        onChange={(value) => onChange(value)}
                        value={value}
                        onBlur={onBlur}
                      />
                    )}
                    name="summary"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" component="h4">
                    Note
                  </Typography>
                  <Controller
                    control={control}
                    render={({onChange, onBlur, value}) => (
                      <TextareaAutosize
                        rows={6}
                        defaultValue=""
                        className={global.w100}
                        value={value}
                        onBlur={onBlur}
                        onChange={(value) => onChange(value)}
                      />
                    )}
                    name="note"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    control={control}
                    render={({onChange, onBlur}) => (
                      <Autocomplete
                        options={['a', 'b', 'c', 'd', 'e']}
                        getOptionLabel={(option) => {
                          onChange(option);
                          return option.toString();
                        }}
                        onBlur={onBlur}
                        onChange={(value) => onChange(value)}
                        renderInput={(params) => (
                          <TextField {...params} label="Assignee" variant="outlined" />
                        )}
                      />
                    )}
                    name="assignee"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    control={control}
                    render={({onChange, onBlur}) => (
                      <Autocomplete
                        options={[1, 2, 3, 4, 5]}
                        getOptionLabel={(option) => {
                          onChange(option);
                          return option.toString();
                        }}
                        onBlur={onBlur}
                        renderInput={(params) => (
                          <TextField {...params} label="Sprint" variant="outlined" />
                        )}
                      />
                    )}
                    name="sprint"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    control={control}
                    render={({onChange, onBlur}) => (
                      <Autocomplete
                        options={['Highest', 'High', 'Medium', 'Low', 'Lowest']}
                        getOptionLabel={(option) => {
                          onChange(option);
                          return option.toString();
                        }}
                        onBlur={onBlur}
                        onChange={(value) => onChange(value)}
                        renderInput={(params) => (
                          <TextField {...params} label="Priority" variant="outlined" />
                        )}
                      />
                    )}
                    name="priority"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    control={control}
                    render={({onChange, onBlur}) => (
                      <Autocomplete
                        options={[1, 2, 3, 4, 5]}
                        getOptionLabel={(option) => {
                          onChange(option);
                          return option.toString();
                        }}
                        onBlur={onBlur}
                        renderInput={(params) => (
                          <TextField {...params} label="Story point" variant="outlined" />
                        )}
                      />
                    )}
                    name="storyPoint"
                    defaultValue=""
                  />
                </Grid>
              </Grid>
              <Grid
                container
                xs={12}
                spacing={3}
                direction="row"
                justify="flex-end"
                alignItems="center">
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="primary" />}
                  label="Create another"
                  labelPlacement="end"
                />
                <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)}>
                  Create
                </Button>
                <Link onClick={handleClose} color="inherit" className={classes.textButton}>
                  {'Cansel'}
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Fade>
      </Modal>
    </>
  );
};
export default CreateTask;

const useStyles = makeStyles(({spacing, palette}: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      padding: spacing(2, 3),
      width: '50%',
      height: 'calc(100% - 100px)',
      outline: 'none',
    },
    boderBottom: {
      borderBottom: `1px solid ${palette.grey[400]}`,
    },
    textButton: {
      padding: spacing(0, 1),
      '&:hover': {
        color: palette.primary.dark,
      },
    },
  }),
);
