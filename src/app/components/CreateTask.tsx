import React, {FC} from 'react';
import {makeStyles, createStyles, Theme, Button, Icon} from '@material-ui/core';
const CreateTask: FC = () => {
  const classes = useStyles();
  return (
    <>
      <Button variant="contained" color="primary" size="medium" endIcon={<Icon>add</Icon>}>
        Create
      </Button>
      <div className={classes.container}></div>
    </>
  );
};
export default CreateTask;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      background: theme.palette.background.default,
    },
  }),
);
