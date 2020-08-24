import {AxiosInstance} from 'axios';

export class AnotherGateway {
  private restConnector: AxiosInstance;

  constructor(restConnector: AxiosInstance) {
    this.restConnector = restConnector;
  }

  async setup() {
    await this.restConnector.post('/another/setup');
  }

  async getAllDataFromServer() {
    const {data} = await this.restConnector.get('/another/get-init-app-data');
    return data;
  }
}
