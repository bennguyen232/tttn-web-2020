import {makeStyles, createStyles, Theme} from '@material-ui/core';

const widthTask = 230;

const useGlobalStyles = makeStyles((theme: Theme) =>
  createStyles({
    groups: {
      display: 'flex',
      margin: -theme.spacing(1),
    },
    tasks: {
      minWidth: widthTask,
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      paddingBottom: 0,
      background: theme.palette.grey[100],
    },
    task: {
      margin: `${theme.spacing(1)}px 0`,
    },
    taskContent: {
      flex: '1 0 auto',
    },
  }),
);

export default useGlobalStyles;
