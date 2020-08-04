import { AccountGateway } from "../gateways";
import { LoginCredentials, LoginUser, SignUp, ChangePassword } from "../models";
import { checkValidates, CheckValidation, TypesCheck } from "../utilities";

export class AccountService {
  [x: string]: any;
  private accountGateway: AccountGateway;

  constructor(accountGateway: AccountGateway) {
    this.accountGateway = accountGateway;
  }

  async login(loginForm: LoginCredentials) {
    checkValidates(loginForm, settingValidateLogin);
    const { token } = await this.accountGateway.login(loginForm);
    await this.accountGateway.useAndSaveAccessToken(token);
    return this.accountGateway.getLoginUser();
  }

  async logout() {
    await this.accountGateway.logout();
    await this.accountGateway.useAndSaveAccessToken("");
  }

  signUp(signUpForm: SignUp) {
    checkValidates(signUpForm, settingValidateSignUp);
    return this.accountGateway.signUp(signUpForm);
  }

  getLoginUser(): Promise<LoginUser | null> {
    return this.accountGateway.getLoginUser();
  }

  editAccount(userForm: LoginUser): Promise<void | null> {
    return this.accountGateway.edit(userForm);
  }

  uploadFile(file: Object): Promise<Object | null> {
    return this.accountGateway.upload(file);
  }

  forgotPassword(email: string): Promise<Object | null> {
    return this.accountGateway.forgotPassword(email);
  }

  changePassword(data: ChangePassword): Promise<Object | null> {
    return this.accountGateway.changePassword(data);
  }
}

const settingValidateLogin: CheckValidation<LoginCredentials>[] = [
  {
    key: "email",
    types: [
      {
        key: TypesCheck.require,
        messenger: "Email is required",
      },
      {
        key: TypesCheck.regex,
        messenger: "Email must be valid",
        regex: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
      },
    ],
  },
  {
    key: "password",
    types: [
      {
        key: TypesCheck.require,
        messenger: "Password is required",
      },
    ],
  },
];

const settingValidateSignUp: CheckValidation<SignUp>[] = [
  {
    key: "firstName",
    types: [
      {
        key: TypesCheck.require,
        messenger: "First name is required",
      },
    ],
  },
  {
    key: "lastName",
    types: [
      {
        key: TypesCheck.require,
        messenger: "Last name is required",
      },
    ],
  },
  {
    key: "email",
    types: [
      {
        key: TypesCheck.require,
        messenger: "Email is required",
      },
      {
        key: TypesCheck.regex,
        messenger: "Email must be valid",
        regex: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
      },
    ],
  },
  {
    key: "password",
    types: [
      {
        key: TypesCheck.require,
        messenger: "Password is required",
      },
    ],
  },
];
