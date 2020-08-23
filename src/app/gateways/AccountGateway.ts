import {AxiosInstance} from 'axios';
import {
  LoginCredentials,
  LoginUser,
  SignUp,
  ResultAccount,
  ChangePassword,
} from '../models/Account';
import {SlowFetch} from '../utilities';

export class AccountGateway {
  private restConnector: AxiosInstance;

  constructor(restConnector: AxiosInstance) {
    this.restConnector = restConnector;
  }

  async login(loginForm: LoginCredentials): Promise<{token: string}> {
    try {
      const {data}: any = await SlowFetch(this.restConnector.post('/users/login', loginForm));
      return data;
    } catch (error) {
      console.log(error);

      if (error.response && error.response.status === 401) {
        return {token: ''};
      }
      throw error;
    }
  }

  async signUp(signUpForm: SignUp): Promise<ResultAccount> {
    try {
      const {data}: any = await SlowFetch(this.restConnector.post('/users/signup', signUpForm));
      return data;
    } catch (error) {
      // console.log(error);
      throw error;
    }
  }

  async logout() {
    // TODO-IMPORTANT: Remove hard code and use rest connector to connect to back-end API
  }

  async getLoginUser(): Promise<ResultAccount | null> {
    try {
      const accessToken: string | null = await this._loadAccessToken();
      if (!accessToken || accessToken === '') {
        return null;
      }
      this.restConnector.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      const {data} = await this.restConnector.get('/users/me');
      return data;
    } catch (e) {
      if (e.response && e.response.status === 401) {
        return null;
      }
      throw e;
    }
  }

  async useAndSaveAccessToken(token: string | null): Promise<void> {
    this.restConnector.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem('authentication.accessToken', token || '');
  }

  async _loadAccessToken() {
    const accessToken = localStorage.getItem('authentication.accessToken');
    return accessToken;
  }

  async edit(userForm: LoginUser): Promise<void> {
    const req = {
      firstName: userForm.firstName,
      lastName: userForm.lastName,
      imageUrl: userForm.imageUrl,
    };
    await SlowFetch(this.restConnector.patch(`/user/${userForm.id}`, req));
  }

  public async upload(file: any) {
    const formData = new FormData();
    formData.append('files', file);
    const options = {
      headers: {'Content-Type': 'multipart/form-data'},
    };
    try {
      const data = await SlowFetch(
        this.restConnector.post('/users/upload-image', formData, options),
      );
      return data;
    } catch (e) {
      throw e;
    }
  }

  public async forgotPassword(email: string) {
    return await SlowFetch(
      this.restConnector.post('/users/send-email-reset-password', {
        email,
      }),
    );
  }

  public async changePassword(data: ChangePassword) {
    return await SlowFetch(this.restConnector.post('/users/change-password', data));
  }
}
