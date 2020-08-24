import {createSlice, Dispatch} from '@reduxjs/toolkit';
import {RootState} from '.';
import {Project, IssueType, Member} from '../../models';
import {AppThunk} from '../store';
import {anotherService, issueService, projectService} from '../../services';
import _ from 'lodash';

interface ConfigProject {
  IssueTypes: IssueType[];
  StoryPoints: IssueType[];
  Priorities: IssueType[];
  Statuses: IssueType[];
}

interface InitSliceType extends ConfigProject {
  Projects: Project[];
  ProjectActiveId: string;
  Issues: any[];
  Members: Member[];
}

// const initState: InitSliceType = {} as InitSliceType;
const initState: InitSliceType = {
  Projects: [],
  ProjectActiveId: '',
  Members: [],
  Issues: [],
  IssueTypes: [],
  StoryPoints: [],
  Priorities: [],
  Statuses: [],
};

const GlobalsSlice = createSlice({
  name: 'globals',
  initialState: initState,
  reducers: {
    setReducer(state, action) {
      return action.payload;
    },
  },
});

export const getAllData = (): AppThunk => async (dispatch: Dispatch, getState) => {
  const {globals} = getState();
  const data = await anotherService.getAllDataFromServer();
  const newData: InitSliceType = {
    ...globals,
    Projects: data.Projects || [],
  };
  dispatch(setReducer(newData));
};

export const setProjectActive = (id: string): AppThunk => async (dispatch: Dispatch, getState) => {
  const {globals} = getState();
  const {Projects, ProjectActiveId} = globals;
  let _id = '';
  if (!ProjectActiveId && (id === 'first' || Projects.length > 0)) {
    _id = _.get(Projects, '[0].Id', '');
  } else {
    _id = id;
  }
  let issues = [];
  let config: ConfigProject = {} as ConfigProject;
  if (_id) {
    console.log('========================');
    issues = await issueService.getIssuesByProjectId(_id);
    config = await projectService.getConfig(_id);
  }
  console.log({config});
  Object.assign(config, {
    StoryPoints: _.sortBy(config.StoryPoints, (i) => parseInt(i.Name)),
  });
  const newData: InitSliceType = {
    ...globals,
    ...config,
    ProjectActiveId: _id,
    Issues: issues,
  };
  dispatch(setReducer(newData));
};

export const {setReducer} = GlobalsSlice.actions;

export const globalsSelectors = {
  select: (state: RootState): InitSliceType => state.globals,
};

export default GlobalsSlice.reducer;
