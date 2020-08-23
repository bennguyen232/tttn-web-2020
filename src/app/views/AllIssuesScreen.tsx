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
import {CreateIssueType} from '../models/Issue';

export const AllIssuesScreen: FC = () => {
  // const issuesDefault: CreateIssueType[] = [
  //   {
  //     Id: '123',
  //     name: 'ken',
  //     type: '1',
  //     Summary : 'summary',
  //     note: 'aadd',
  //     priority: 'Highest',
  //     SprintId : '1',
  //     storyPoint: '2',
  //     assignee: 'asd',
  //   },
  //   {
  //     Id: '1234',
  //     name: 'nguyen',
  //     type: '2',
  //     Summary : 'summary23',
  //     note: 'dddd',
  //     priority: 'High',
  //     SprintId : '2',
  //     storyPoint: '5',
  //     assignee: 'asd',
  //   },
  // ];
  // // const classes = useStyles();
  // const globals = useGlobalStyles();
  // const [issues, setIssues] = useState<CreateIssueType[]>(issuesDefault);
  // const [chossenIssue, setChossenIssue] = useState<CreateIssueType>();
  // const [isChangeNote, setIsChangeNote] = useState<boolean>(false);

  // const changeDataIssue = (key: 'summary' | 'note' | 'sprint', data: string) => {
  //   const dataIssue = {...chossenIssue} as CreateIssueType;
  //   Object.assign(dataIssue, {[key]: data});
  //   setChossenIssue(dataIssue);
  // };

  // const editIssue = () => {
  //   setIssues(issuesDefault);
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

  // const renderListIssue = () => {
  //   if (!issues) return;
  //   return (
  //     <Grid item xs={12}>
  //       {issues.map((data) => {
  //         return (
  //           <Button
  //             key={data.Id}
  //             className={mulClasses([globals.w100, globals.d_flexStart, globals.p2])}
  //             variant={chossenIssue && data.Id === chossenIssue.Id ? 'outlined' : undefined}
  //             onClick={() => changeChoosenIssue(data)}>
  //             <Grid xs={12} justify="flex-start" alignItems="center" spacing={2}>
  //               <Grid container item xs={12} spacing={2}>
  //                 <Grid item> {renderIconTypeIssue(data.type)}</Grid>
  //                 <Grid item> {data.name}</Grid>
  //               </Grid>
  //               <Grid container item>
  //                 {data.Summary }
  //               </Grid>
  //             </Grid>
  //           </Button>
  //         );
  //       })}
  //     </Grid>
  //   );
  // };

  // // Detetl Issue

  // const renderNote = () => {
  //   const dataNote = get(chossenIssue, 'note');
  //   if (isChangeNote) {
  //     return (
  //       <Grid item xs={12}>
  //         <TextareaAutosize
  //           rows={6}
  //           value={dataNote}
  //           className={globals.w100}
  //           onChange={(value) => changeDataIssue('note', value.target.value)}
  //         />
  //         <Grid item xs={12} direction="row">
  //           <Button
  //             onClick={() => {
  //               // changeDataIssue(note, )
  //               setIsChangeNote(false);
  //             }}
  //             variant="contained"
  //             color="primary">
  //             Save
  //           </Button>
  //           <Button onClick={() => setIsChangeNote(false)}>cansel</Button>
  //         </Grid>
  //       </Grid>
  //     );
  //   }
  //   return (
  //     <Button
  //       className={mulClasses([globals.w100, globals.d_flexStart, globals.p2])}
  //       onClick={() => setIsChangeNote(true)}>
  //       {dataNote ? dataNote : 'Add a note...'}
  //     </Button>
  //   );
  // };

  // const renderDetetlIssue = () => {
  //   if (!chossenIssue) return;
  //   return (
  //     <Grid container item spacing={3}>
  //       <Grid item xs={12}>
  //         <Typography variant="h5" component="h2">
  //           {chossenIssue.name}
  //         </Typography>
  //       </Grid>
  //       <Grid item xs={12}>
  //         <TextField
  //           className={globals.w100}
  //           label="Summary"
  //           variant="outlined"
  //           onChange={(event) => changeDataIssue('summary', event.target.value)}
  //           value={chossenIssue.Summary }
  //         />
  //       </Grid>
  //       <Grid container item xs={12} direction="row" spacing={3}>
  //         <Grid item>
  //           <Autocomplete
  //             options={['Highest', 'High', 'Medium', 'Low', 'Lowest']}
  //             size="small"
  //             getOptionLabel={(option: any) => {
  //               const value = option.toString();
  //               // changeDataIssue('sprint', value);
  //               return value;
  //             }}
  //             inputValue={chossenIssue.priority}
  //             renderInput={(params: any) => (
  //               <TextField {...params} label="Priority" variant="outlined" />
  //             )}
  //           />
  //         </Grid>
  //         <Grid item>
  //           <Autocomplete
  //             options={[1, 2, 3, 4, 5]}
  //             inputValue={chossenIssue.SprintId }
  //             size="small"
  //             getOptionLabel={(option) => {
  //               // onChange(option);
  //               return option.toString();
  //             }}
  //             renderInput={(params) => <TextField {...params} label="Sprint" variant="outlined" />}
  //           />
  //         </Grid>
  //         <Grid item>
  //           <Autocomplete
  //             options={[1, 2, 3, 4]}
  //             size="small"
  //             getOptionLabel={(option: any) => {
  //               const value = option.toString();
  //               // changeDataIssue('sprint', value);
  //               return value;
  //             }}
  //             inputValue={chossenIssue.storyPoint}
  //             renderInput={(params: any) => (
  //               <TextField {...params} label="Story point" variant="outlined" />
  //             )}
  //           />
  //         </Grid>
  //         <Grid item>
  //           <Autocomplete
  //             options={[1, 2, 3, 4]}
  //             size="small"
  //             getOptionLabel={(option: any) => {
  //               const value = option.toString();
  //               // changeDataIssue('sprint', value);
  //               return value;
  //             }}
  //             inputValue={chossenIssue.storyPoint}
  //             renderInput={(params: any) => (
  //               <TextField {...params} label="Story point" variant="outlined" />
  //             )}
  //           />
  //         </Grid>
  //       </Grid>
  //       <Grid item xs={12}>
  //         <Typography variant="subtitle1" component="h4">
  //           Note
  //         </Typography>
  //         {renderNote()}
  //       </Grid>
  //       <Grid item>
  //         <Typography variant="subtitle1" component="h4">
  //           Assignee
  //         </Typography>
  //         <Autocomplete
  //           options={[1, 2, 3, 4]}
  //           size="small"
  //           getOptionLabel={(option: any) => option.toString()}
  //           inputValue={chossenIssue.assignee}
  //           renderInput={(params: any) => <TextField {...params} variant="outlined" />}
  //         />
  //       </Grid>
  //     </Grid>
  //   );
  // };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h6" component="h2">
          All Issues
        </Typography>
      </Grid>
      {/* <Grid container item xs={12}>
        <Grid item xs={3} className={mulClasses([globals.p2, globals.br1])}>
          {renderListIssue()}
        </Grid>
        <Grid container item xs={9} className={globals.p5}>
          {renderDetetlIssue()}
        </Grid>
      </Grid> */}
    </Grid>
  );
};
export default AllIssuesScreen;
