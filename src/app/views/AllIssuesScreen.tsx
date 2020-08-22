import React, {FC, useState} from 'react';
import {
  // createStyles,
  Typography,
  // makeStyles,
  // Theme,
  Button,
  Grid,
  Icon,
  TextField,
  TextareaAutosize,
} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import {useGlobalStyles, mulClasses} from '../utilities';
import {get} from 'lodash';
import {IssueType} from '../models/Issue';

export const AllIssuesScreen: FC = () => {
  const issuesDefault: IssueType[] = [
    {
      id: '123',
      name: 'ken',
      type: '1',
      summary: 'summary',
      note: 'aadd',
    },
    {
      id: '1234',
      name: 'nguyen',
      type: '2',
      summary: 'summary23',
      note: 'dddd',
    },
  ];
  // const classes = useStyles();
  const globals = useGlobalStyles();
  const [issues, setIssues] = useState<IssueType[]>(issuesDefault);
  const [chossenIssue, setChossenIssue] = useState<IssueType>();
  const [isChangeNote, setIsChangeNote] = useState<boolean>(false);

  const changeDataIssue = (key: 'summary' | 'note' | 'sprint', data: string) => {
    const dataIssue = {...chossenIssue} as IssueType;
    Object.assign(dataIssue, {[key]: data});
    setChossenIssue(dataIssue);
  };

  const editIssue = () => {
    setIssues(issuesDefault);
  };

  const changeChoosenIssue = (data: IssueType) => {
    setIsChangeNote(false);
    setChossenIssue(data);
    ///test
    editIssue();
  };

  const renderIconTypeIssue = (nameType: string) => {
    switch (nameType) {
      case '1':
        return (
          <Icon className="fa fa-plus-circle" color="primary">
            add_circle
          </Icon>
        );
      case '2':
        return (
          <Icon className="fa fa-plus-circle" color="action">
            add_circle
          </Icon>
        );
      default:
        break;
    }
  };

  const renderListIssue = () => {
    if (!issues) return;
    return (
      <Grid item xs={12}>
        {issues.map((data) => {
          return (
            <Button
              key={data.id}
              className={mulClasses([globals.w100, globals.d_flexStart, globals.p2])}
              variant={chossenIssue && data.id === chossenIssue.id ? 'outlined' : undefined}
              onClick={() => changeChoosenIssue(data)}>
              <Grid xs={12} justify="flex-start" alignItems="center" spacing={2}>
                <Grid container item xs={12} spacing={2}>
                  <Grid item> {renderIconTypeIssue(data.type)}</Grid>
                  <Grid item> {data.name}</Grid>
                </Grid>
                <Grid container item>
                  {data.summary}
                </Grid>
              </Grid>
            </Button>
          );
        })}
      </Grid>
    );
  };

  // Detetl Issue

  const renderNote = () => {
    const dataNote = get(chossenIssue, 'note');
    if (isChangeNote) {
      return (
        <Grid item xs={12}>
          <TextareaAutosize
            rows={6}
            value={dataNote}
            className={globals.w100}
            onChange={(value) => changeDataIssue('note', value.target.value)}
          />
          <Grid item xs={12} direction="row">
            <Button
              onClick={() => {
                // changeDataIssue(note, )
                setIsChangeNote(false);
              }}
              variant="contained"
              color="primary">
              Save
            </Button>
            <Button onClick={() => setIsChangeNote(false)}>cansel</Button>
          </Grid>
        </Grid>
      );
    }
    return (
      <Button
        className={mulClasses([globals.w100, globals.d_flexStart, globals.p2])}
        onClick={() => setIsChangeNote(true)}>
        {dataNote ? dataNote : 'Add a note...'}
      </Button>
    );
  };

  const renderDetetlIssue = () => {
    if (!chossenIssue) return;
    return (
      <Grid container item spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h2">
            {chossenIssue.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={globals.w100}
            label="Summary"
            variant="outlined"
            onChange={(event) => changeDataIssue('summary', event.target.value)}
            value={chossenIssue.summary}
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            options={['Highest', 'High', 'Medium', 'Low', 'Lowest']}
            getOptionLabel={(option: any) => {
              const value = option.toString();
              changeDataIssue('sprint', value);
              return value;
            }}
            renderInput={(params: any) => (
              <TextField
                {...params}
                onChange={(value) => {
                  console.log('asdad', value);
                }}
                label="Priority"
                variant="outlined"
              />
            )}
          />
          <Autocomplete
            options={['Highest', 'High', 'Medium', 'Low', 'Lowest']}
            getOptionLabel={(option: any) => {
              const value = option.toString();
              console.log({value});

              // changeDataIssue('sprint', value);
              return value;
            }}
            renderInput={(params: any) => (
              <TextField {...params} label="Priority" variant="outlined" />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" component="h4">
            Note
          </Typography>
          {renderNote()}
        </Grid>
      </Grid>
    );
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h6" component="h2">
          All Issues
        </Typography>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={3} className={mulClasses([globals.p2, globals.br1])}>
          {renderListIssue()}
        </Grid>
        <Grid container item xs={9} className={globals.p2}>
          {renderDetetlIssue()}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default AllIssuesScreen;
