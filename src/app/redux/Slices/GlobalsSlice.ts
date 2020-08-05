import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '.';

interface InitSliceType {
  location: Location;
  customLocation: Location;
}

const initState: InitSliceType = {} as InitSliceType;

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
