import {LoginCredentials, SignUp, ResultAccount, LoginUser} from './../../models';
import {createSlice, Dispatch} from '@reduxjs/toolkit';
import {accountService} from '../../services';
import {AppThunk} from '../store';
import {RootState} from './index';

const Accounts = createSlice({
  name: 'accounts',
  initialState: null,
  reducers: {
    setAccount(state, action) {
      return action.payload;
    },
  },
});

export const {setAccount} = Accounts.actions;

export const login = (loginForm: LoginCredentials): AppThunk => async (dispatch: Dispatch) => {
  const user = await accountService.login(loginForm);
  if (!user) {
    alert('Wrong email or password, please try again');
  }
  dispatch(setAccount(user));
  return user;
};

export const signUp = (data: SignUp, callback = () => {}): AppThunk => async (
  dispatch: Dispatch,
) => {
  const {password, email} = data;
  const result: ResultAccount = await accountService.signUp(data);
  if (!result) {
    alert('Wrong email or password, please try again');
  } else {
    const user = await accountService.login({password, email});
    if (!user) {
      alert('Wrong email or password, please try again');
    }
    dispatch(setAccount(user));
    callback();
    return user;
  }
};

export const logout = (): AppThunk => async (dispatch: Dispatch) => {
  await accountService.logout();
  dispatch(setAccount(null));
};

export const loadLoginUser = (callback = () => {}) => async (dispatch: Dispatch) => {
  const user = await accountService.getLoginUser();
  if (user !== null) {
    dispatch(setAccount(user));
    callback();
  }
  return user;
};

export const editAccount = (userForm: LoginUser, callback = () => {}): AppThunk => async (
  dispatch: Dispatch,
) => {
  await accountService.editAccount(userForm);
  loadLoginUser(callback)(dispatch);
  alert('You have successfully changed information');
};

export const uploadFile = (file: any) => async () => {
  const user = await accountService.uploadFile(file);
  return user;
};

export const accountSelectors = {
  select: (state: RootState): LoginUser | null => state.accounts,
};

export default Accounts.reducer;
