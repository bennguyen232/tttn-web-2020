import {AxiosInstance} from 'axios';

export class IssueGateway {
  private restConnector: AxiosInstance;

  constructor(restConnector: AxiosInstance) {
    this.restConnector = restConnector;
  }

  async getIssuesByProjectId(id: string): Promise<any> {
    const {data} = await this.restConnector.get(`/projects/${id}/issues`);
    return data;
  }
}
