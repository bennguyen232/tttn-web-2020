import {createSlice, Dispatch} from '@reduxjs/toolkit';
import {RootState} from '.';
import {Project} from '../../models';
import {AppThunk} from '../store';
import {anotherService, issueService} from '../../services';
import _ from 'lodash';

interface InitSliceType {
  Projects: Project[];
  ProjectActiveId: string;
  Issues: any[];
}

// const initState: InitSliceType = {} as InitSliceType;
const initState: InitSliceType = {
  Projects: [],
  ProjectActiveId: '',
  Issues: [],
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
  let _id = id;
  if (!ProjectActiveId && (id === 'first' || Projects.length > 0)) {
    _id = _.get(Projects, '[0].Id', '');
  }
  let issues = [];
  if (ProjectActiveId) {
    issues = await issueService.getIssuesByProjectId(ProjectActiveId);
  }
  const newData: InitSliceType = {
    ...globals,
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
