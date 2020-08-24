import {AxiosInstance} from 'axios';
import {CreateProjectModel, Project, IssueType} from '../models';

interface GetConfigResult {
  IssueTypes: IssueType[];
  StoryPoints: IssueType[];
  Priorities: IssueType[];
  Statuses: IssueType[];
}

export class ProjectGateway {
  private restConnector: AxiosInstance;

  constructor(restConnector: AxiosInstance) {
    this.restConnector = restConnector;
  }

  async create(project: CreateProjectModel): Promise<Project> {
    const {data} = await this.restConnector.post('/projects', project);
    return data;
  }

  async getConfig(id: string): Promise<GetConfigResult> {
    const {data} = await this.restConnector.get(`/projects/${id}/config`);
    return data;
  }

  async getMember(id: string): Promise<any> {
    const {data} = await this.restConnector.get(`/projects/${id}/member`);
    return data;
  }
}
