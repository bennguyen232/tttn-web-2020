import React, {FC, useState} from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  Button,
  Modal,
  Backdrop,
  Fade,
  Grid,
  Paper,
  Typography,
  TextField,
  Link,
  TextareaAutosize,
  Card,
} from '@material-ui/core';
import {useGlobalStyles, mulClasses} from '../utilities';
import {useForm, Controller} from 'react-hook-form';
import {useStylesItem} from '../views/HomeScreen';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {CreateProjectModel} from '../models';
import {yupResolver} from '@hookform/resolvers';
import * as yup from 'yup';
import {projectService} from 'app/services';
import store from 'app/redux/store';
import {setProjectActive, getAllData} from '../redux/Slices/GlobalsSlice';
import {useHistory} from 'react-router-dom';

const schema = yup.object<CreateProjectModel>().shape({
  Name: yup.string().required(),
  Description: yup.string().required(),
});

const CreateProject: FC = () => {
  const classes = useStyles();
  const globals = useGlobalStyles();
  const classesItem = useStylesItem();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const {control, handleSubmit, formState} = useForm<CreateProjectModel>({
    resolver: yupResolver(schema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    shouldFocusError: true,
    shouldUnregister: true,
    defaultValues: {
      Name: '',
      Description: '',
    },
  });
  const {isValid} = formState;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data: CreateProjectModel) => {
    try {
      console.log(data);
      data.UrlImage = 'rocket';
      const project = await projectService.create(data);
      console.log(project);
      if (project) {
        setOpen(false);
        store.dispatch(setProjectActive(project.Id));
        store.dispatch(getAllData());
        history.push('/issues');
      }
    } catch (error) {
      alert('Try again!!!');
    }
  };

  return (
    <>
      <Card
        className={mulClasses([classesItem.cardItem, globals.flexCenter])}
        elevation={3}
        onClick={handleOpen}>
        <AddCircleOutlineIcon className={classes.iconPlus} />
      </Card>
      <Modal
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
              <Grid item xs={12} className={globals.py2}>
                <Typography variant="h3" component="h4" align="center">
                  Create Project
                </Typography>
              </Grid>
              <Grid container item spacing={3} xs={12}>
                <Grid item xs={12}>
                  <Controller
                    control={control}
                    render={({onChange, onBlur, value}) => (
                      <TextField
                        className={globals.w100}
                        label="Project Name"
                        variant="outlined"
                        onChange={(value) => onChange(value)}
                        value={value}
                        onBlur={onBlur}
                        type="text"
                        // defaultValue={chossenIssue.summary}
                      />
                    )}
                    name="Name"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" component="h4">
                    Description
                  </Typography>
                  <Controller
                    control={control}
                    render={({onChange, onBlur, value}) => (
                      <TextareaAutosize
                        rows={6}
                        // defaultValue=""
                        className={mulClasses([globals.customTxtArea, globals.w100])}
                        value={value}
                        onBlur={onBlur}
                        onChange={(value) => onChange(value)}
                      />
                    )}
                    name="Description"
                    defaultValue=""
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12} justify="flex-end" alignItems="center">
                <Paper elevation={0} className={globals.p2}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit(onSubmit)}
                    disabled={!isValid}>
                    Create
                  </Button>
                  <Link onClick={handleClose} color="inherit" className={classes.textButton}>
                    {'Cancel'}
                  </Link>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Fade>
      </Modal>
    </>
  );
};
export default CreateProject;

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
      overflowY: 'auto',
    },
    textButton: {
      padding: spacing(0, 1),
      cursor: 'pointer',
      '&:hover': {
        color: palette.primary.dark,
      },
    },
    iconPlus: {
      fontSize: 80,
      color: palette.grey[600],
    },
  }),
);
