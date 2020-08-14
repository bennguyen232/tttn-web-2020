import {AccountGateway} from '../gateways';
import {LoginCredentials, LoginUser, SignUp, ChangePassword} from '../models';

export class AccountService {
  [x: string]: any;
  private accountGateway: AccountGateway;

  constructor(accountGateway: AccountGateway) {
    this.accountGateway = accountGateway;
  }

  async login(loginForm: LoginCredentials) {
    const {token} = await this.accountGateway.login(loginForm);
    await this.accountGateway.useAndSaveAccessToken(token);
    return this.accountGateway.getLoginUser();
  }

  async logout() {
    await this.accountGateway.logout();
    await this.accountGateway.useAndSaveAccessToken('');
  }

  signUp(signUpForm: SignUp) {
    return this.accountGateway.signUp(signUpForm);
  }

  getLoginUser(): Promise<LoginUser | null> {
    return this.accountGateway.getLoginUser();
  }

  editAccount(userForm: LoginUser): Promise<void | null> {
    return this.accountGateway.edit(userForm);
  }

  uploadFile(file: any): Promise<any> {
    return this.accountGateway.upload(file);
  }

  forgotPassword(email: string): Promise<any> {
    return this.accountGateway.forgotPassword(email);
  }

  changePassword(data: ChangePassword): Promise<any> {
    return this.accountGateway.changePassword(data);
  }
}
