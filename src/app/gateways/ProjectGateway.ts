import {AxiosInstance} from 'axios';
import {CreateProjectModel, Project} from '../models';

export class ProjectGateway {
  private restConnector: AxiosInstance;

  constructor(restConnector: AxiosInstance) {
    this.restConnector = restConnector;
  }

  async create(project: CreateProjectModel): Promise<Project> {
    const {data} = await this.restConnector.post('/projects', project);
    return data;
  }
}
