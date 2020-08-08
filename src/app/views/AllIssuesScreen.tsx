import React, {FC, useState} from 'react';
import {
  // createStyles,
  CardContent,
  Typography,
  // makeStyles,
  // Theme,
  Grid,
  Paper,
  Card,
} from '@material-ui/core';
import useGlobalStyles from '../utilities/useGlobalStyles';
import {TasksData, Tasks, Tag} from '../models';
import {TASKS_DATA} from '../../data/tasks';

const AllIssuesScreen: FC = () => {
  // const classes = useStyles();
  const globals = useGlobalStyles();
  const [tasksData /*, setTasksData*/] = useState<TasksData>(TASKS_DATA);
  const [draggedTag, setDraggedTag] = useState<Tag | null>(null);

  const _onDragOver = (tas: Tag) => () => {
    setDraggedTag(tas);
  };

  const _onDragEnd = () => {
    console.log(draggedTag);
  };

  const _renderRow = (group: Tasks) => {
    const {tasks} = group;
    return tasks.map((item, index) => {
      const {name} = item;
      return (
        <Card elevation={1} key={index} className={globals.task} draggable onDragEnd={_onDragEnd}>
          <CardContent>
            <Typography variant="body2" component="p">
              {name}
            </Typography>
          </CardContent>
        </Card>
      );
    });
  };

  const _renderColumn = () => {
    return tasksData.map((item, index) => {
      const {tag} = item;
      return (
        <Paper elevation={0} key={index} className={globals.tasks} onDragOver={_onDragOver(tag)}>
          <Typography variant="subtitle1" component="h4">
            {tag.name}
          </Typography>
          {_renderRow(item)}
        </Paper>
      );
    });
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h6" component="h2">
          All Issues
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <div className={globals.groups}>{_renderColumn()}</div>
      </Grid>
    </Grid>
  );
};
export default AllIssuesScreen;

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     content: {},
//   }),
// );
