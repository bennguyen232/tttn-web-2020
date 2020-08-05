import {combineReducers} from 'redux';
import AccountsSlice, {accountSelectors} from './AccountsSlice';
import GlobalsSlice, {globalsSelectors} from './GlobalsSlice';

const rootReducer = combineReducers({
  globals: GlobalsSlice,
  accounts: AccountsSlice,
});

export default rootReducer;

export const selectors = {
  globals: globalsSelectors,
  account: accountSelectors,
};

export type RootState = ReturnType<typeof rootReducer>;
