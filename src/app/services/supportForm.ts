import {TypesCheck, CheckValidation} from '../utilities';
import {SignUp, LoginCredentials} from '../models';

export const settingValidateLogin: CheckValidation<LoginCredentials>[] = [
  {
    key: 'email',
    types: [
      {
        key: TypesCheck.require,
        messenger: 'Email is required',
      },
      {
        key: TypesCheck.regex,
        messenger: 'Email must be valid',
        regex: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
      },
    ],
  },
  {
    key: 'password',
    types: [
      {
        key: TypesCheck.require,
        messenger: 'Password is required',
      },
    ],
  },
];

export const settingValidateSignUp: CheckValidation<SignUp>[] = [
  {
    key: 'firstName',
    types: [
      {
        key: TypesCheck.require,
        messenger: 'First name is required',
      },
    ],
  },
  {
    key: 'lastName',
    types: [
      {
        key: TypesCheck.require,
        messenger: 'Last name is required',
      },
    ],
  },
  {
    key: 'email',
    types: [
      {
        key: TypesCheck.require,
        messenger: 'Email is required',
      },
      {
        key: TypesCheck.regex,
        messenger: 'Email must be valid',
        regex: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
      },
    ],
  },
  {
    key: 'password',
    types: [
      {
        key: TypesCheck.require,
        messenger: 'Password is required',
      },
    ],
  },
];
