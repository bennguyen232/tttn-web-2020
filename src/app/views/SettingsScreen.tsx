import React, {FC} from 'react';
import {
  Paper,
  Typography,
  Grid,
  makeStyles,
  Theme,
  createStyles,
  TextField,
  Button,
} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import {useForm, Controller} from 'react-hook-form';
import {Tag} from '../models/Setting';
import _ from 'lodash';
// import InputSelectControl from '../components/InputSelectControl';
// import {useGlobalStyles, mulClasses} from '../utilities';

// type Props = {
//   dispatch: AppDispatch;
// } & ReturnType<typeof mapStateToProps>;

const SettingsScreen: FC = () => {
  const classes = useStyles();
  // const globals = useGlobalStyles();
  const options: Tag[] = [
    {id: '1', name: 'Highest'},
    {id: '2', name: 'ken'},
    {id: '3', name: 'asdasd'},
    {id: '4', name: 'asdasdasd'},
  ];

  const DefaultOptions: Tag[] = [
    {id: '1', name: 'Highest'},
    {id: '2', name: 'ken'},
  ];

  // const getOpObj = (option: Tag) => {
  //   if (!option.id) {
  //     let dataOption = options.find((op: Tag) => op.id === option.id);
  //     if (dataOption) return dataOption;
  //   }
  //   return option;
  // };

  const [inputValue, setInputValue] = React.useState('');

  const {handleSubmit, control, setValue} = useForm();

  const onSubmit = (data: any) => console.log('ken', data);

  React.useEffect(() => {
    setValue('priority', DefaultOptions);
  }, [setValue]);

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
            <Grid item xs={6}>
              <Controller
                render={(props) => (
                  <Autocomplete
                    id="food-id"
                    multiple
                    options={options}
                    getOptionLabel={(option) => option.name}
                    getOptionSelected={(option, value) => option.id === value.id}
                    filterSelectedOptions
                    value={props.value} // value is passed by render from the Controller
                    onChange={(e, values) => {
                      console.log({values, e});
                      const data = _.difference([...DefaultOptions], [...values]);
                      console.log({data});

                      setValue('priority', values);
                    }} // instead here the docs said to do: onChange={e => props.onChange(e.target.checked)}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                      setInputValue(newInputValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Choose food"
                        name="priority"
                        placeholder="Choose food"
                        variant="outlined"
                        fullWidth
                      />
                    )}
                  />
                )}
                control={control}
                name="priority"
                defaultValue={[]} // this prevents the "controlled/uncontrolled change" error
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)}>
                Create
              </Button>
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
