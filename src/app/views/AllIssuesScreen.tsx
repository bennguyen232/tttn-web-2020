import React, {FC, useState, useEffect} from 'react';
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
import {CreateIssueForm} from '../models/Issue';
import {RootState, selectors} from '../redux/Slices';
import {connect} from 'react-redux';
import store from '../redux/store';
import {setProjectActive} from '../redux/Slices/GlobalsSlice';
import {Project} from '../models';
import CardIssue from '../components/CardIssue';

type Props = ReturnType<typeof mapStateToProps>;

export const AllIssuesScreen: FC<Props> = ({globalRedux}) => {
  const {Issues} = globalRedux;
  console.log(Issues);

  // const classes = useStyles();
  const globals = useGlobalStyles();
  const [issues, setIssues] = useState(Issues);
  const [chossenIssue, setChossenIssue] = useState<CreateIssueForm>();
  const [isChangeNote, setIsChangeNote] = useState<boolean>(false);

  // const changeDataIssue = (key: 'summary' | 'note' | 'sprint', data: string) => {
  //   const dataIssue = {...chossenIssue} as CreateIssueType;
  //   Object.assign(dataIssue, {[key]: data});
  //   setChossenIssue(dataIssue);
  // };

  // const editIssue = () => {
  //   setIssues([]);
  // };

  // const changeChoosenIssue = (data: CreateIssueType) => {
  //   setIsChangeNote(false);
  //   setChossenIssue(data);
  //   ///test
  //   editIssue();
  // };

  // const renderIconTypeIssue = (nameType: string) => {
  //   switch (nameType) {
  //     case '1':
  //       return (
  //         <Icon className="fa fa-plus-circle" color="primary">
  //           add_circle
  //         </Icon>
  //       );
  //     case '2':
  //       return (
  //         <Icon className="fa fa-plus-circle" color="action">
  //           add_circle
  //         </Icon>
  //       );
  //     default:
  //       break;
  //   }
  // };

  const renderListIssue = () => {
    return issues.map((data) => {
      return <CardIssue />;
    });
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
        {/* <Grid container item xs={9} className={globals.p5}>
          {renderDetetlIssue()}
        </Grid> */}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: RootState) => ({
  globalRedux: selectors.globals.select(state),
});

export default connect(mapStateToProps)(AllIssuesScreen);
