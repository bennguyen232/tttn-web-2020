import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '.';
import {Colors} from '../../models';
import {DATA_TEST} from '../../../data/another';

interface InitSliceType {
  colors: Colors;
}

// const initState: InitSliceType = {} as InitSliceType;
const initState: InitSliceType = DATA_TEST;

const GlobalsSlice = createSlice({
  name: 'globals',
  initialState: initState,
  reducers: {
    setReducer(state, action) {
      return action.payload;
    },
  },
});

export const {setReducer} = GlobalsSlice.actions;

export const globalsSelectors = {
  select: (state: RootState): InitSliceType => state.globals,
};

export default GlobalsSlice.reducer;
