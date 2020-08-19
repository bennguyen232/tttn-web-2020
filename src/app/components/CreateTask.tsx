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
  MenuItem,
} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';

const CreateTask: FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            <Grid container spacing={2}>
              <Grid xs={12}>
                <Typography variant="subtitle1" component="h4">
                  Create Issue
                </Typography>
              </Grid>
              <Grid xs={12}>
                <Typography variant="subtitle2" component="h5">
                  Issue Type
                </Typography>
                <Autocomplete
                  id="combo-box-demo"
                  options={[1, 2, 3]}
                  getOptionLabel={(option) => option.toString()}
                  style={{width: 300}}
                  defaultValue={1}
                  renderInput={(params) => (
                    <TextField {...params} label="Combo box" variant="outlined" />
                  )}
                />
              </Grid>
            </Grid>
          </Paper>
        </Fade>
      </Modal>
    </>
  );
};
export default CreateTask;

const useStyles = makeStyles(({palette, shadows, spacing}: Theme) =>
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
  }),
);
