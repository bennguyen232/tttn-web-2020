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
  Checkbox,
  Link,
  TextareaAutosize,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import {useGlobalStyles, mulClasses} from '../utilities';
import {useForm, Controller} from 'react-hook-form';
import {CreateIssueForm} from '../models';
import {RootState, selectors} from '../redux/Slices';
import {connect} from 'react-redux';
import _ from 'lodash';
import {yupResolver} from '@hookform/resolvers';
import * as yup from 'yup';
import FlareIcon from '@material-ui/icons/Flare';

const schema = yup.object<CreateIssueForm>().shape({
  Summary: yup.string().required(),
  Description: yup.string().required(),
  // ProjectId: yup.string().required(),
  // SprintId: yup.string().required(),
  // IssueParentId: yup.string().required(),
  // UserCreatedId: yup.string().required(),
  // AssigneeId: yup.string().required(),
});

const getDefaultVal = (value: string, arr: any[], filter: [string, string]) => {
  if (!_.isEmpty(value)) return value;
  const item = _.find(arr, filter);
  return _.get(item, 'Id', '');
};

type Props = ReturnType<typeof mapStateToProps>;

const CreateIssue: FC<Props> = ({globalRedux, profileRedux}) => {
  console.log({globalRedux});
  const {
    IssueTypes,
    StoryPoints,
    Priorities,
    Statuses,
    Projects,
    ProjectActiveId,
    Members,
  } = globalRedux;
  const classes = useStyles();
  const globals = useGlobalStyles();
  const [open, setOpen] = useState(true);
  const [isContinue, setIsContinue] = useState(false);
  console.log();

  const {control, handleSubmit} = useForm<CreateIssueForm>({
    resolver: yupResolver(schema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    shouldFocusError: true,
    shouldUnregister: true,
    defaultValues: {
      Summary: '',
      Description: '',
      ProjectId: '',
      IssueParentId: '',
      AssigneeId: '',
      IssueTypeId: '',
      PriorityId: '',
      StoryPointId: '',
    },
  });
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const resetForm = () => {
    console.log('resetForm');
  };

  const onSubmit = (emit: any) => {
    console.log(emit);
    const data: CreateIssueForm = {} as CreateIssueForm;

    console.log(data);
    if (isContinue) {
      resetForm();
    }
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
            <Grid container>
              <Grid item xs={12} className={globals.py2}>
                <Typography variant="h3" component="h4" align="center">
                  Create Issue
                </Typography>
              </Grid>
              <Grid container item spacing={3}>
                <Grid item xs={12}>
                  <Grid container item alignItems="center">
                    <FlareIcon />
                    <Typography variant="h5" component="h4" className={globals.ml1}>
                      {_.find(Projects, ['Id', ProjectActiveId])?.Name}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="IssueTypeId"
                    control={control}
                    rules={{required: true}}
                    render={({onChange, value}) => (
                      <FormControl className={classes.formControl}>
                        <InputLabel>Issue Type</InputLabel>
                        <Select
                          onChange={onChange}
                          value={getDefaultVal(value, IssueTypes, ['Name', 'Task'])}>
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {IssueTypes.map((item, index) => (
                            <MenuItem value={item.Id} key={index}>
                              {item.Name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="Summary"
                    control={control}
                    render={({onChange, onBlur, value}) => (
                      <TextField
                        className={globals.w100}
                        label="Summary"
                        variant="outlined"
                        onChange={(value) => onChange(value)}
                        value={value}
                        onBlur={onBlur}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" component="h4">
                    Note
                  </Typography>
                  <Controller
                    name="Description"
                    control={control}
                    render={({onChange, onBlur, value}) => (
                      <TextareaAutosize
                        rows={6}
                        className={mulClasses([globals.customTxtArea, globals.w100])}
                        value={value}
                        onBlur={onBlur}
                        onChange={(value) => onChange(value)}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="AssigneeId"
                    control={control}
                    defaultValue={false}
                    rules={{required: true}}
                    render={({onChange, value}) => (
                      <FormControl className={classes.formControl}>
                        <InputLabel>Assignee</InputLabel>
                        <Select
                          onChange={onChange}
                          value={getDefaultVal(value, Members, [
                            'Id',
                            _.get(profileRedux, 'Id', ''),
                          ])}>
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {Members.map((item, index) => (
                            <MenuItem value={item.Id} key={index}>
                              {item.FirstName} {item.LastName}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="PriorityId"
                    control={control}
                    defaultValue={false}
                    rules={{required: true}}
                    render={({onChange, value}) => (
                      <FormControl className={classes.formControl}>
                        <InputLabel>Priority</InputLabel>
                        <Select
                          onChange={onChange}
                          value={getDefaultVal(value, Priorities, ['Name', 'Medium'])}>
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {Priorities.map((item, index) => (
                            <MenuItem value={item.Id} key={index}>
                              {item.Name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="StoryPointId"
                    control={control}
                    defaultValue={false}
                    rules={{required: true}}
                    render={({onChange, value}) => (
                      <FormControl className={classes.formControl}>
                        <InputLabel>Story Point</InputLabel>
                        <Select
                          onChange={onChange}
                          value={getDefaultVal(value, StoryPoints, ['Name', '0'])}>
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {StoryPoints.map((item, index) => (
                            <MenuItem value={item.Id} key={index}>
                              {item.Name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12} justify="flex-end" alignItems="center">
                <Checkbox
                  checked={isContinue}
                  color="primary"
                  inputProps={{'aria-label': 'secondary checkbox'}}
                  onChange={() => {
                    setIsContinue(!isContinue);
                  }}
                />
                <span>Create Another</span>
                <Button
                  className={globals.ml1}
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit(onSubmit)}>
                  Create
                </Button>
                <Link onClick={handleClose} color="inherit" className={classes.textButton}>
                  {'Cancel'}
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Fade>
      </Modal>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  globalRedux: selectors.globals.select(state),
  profileRedux: selectors.account.select(state),
});

export default connect(mapStateToProps)(CreateIssue);

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
    button: {
      display: 'block',
      marginTop: spacing(2),
    },
    formControl: {
      margin: spacing(1),
      minWidth: 120,
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
