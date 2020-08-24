import {ProjectGateway} from '../gateways';
import {CreateProjectModel} from '../models';

export class ProjectService {
  private projectGateway: ProjectGateway;

  constructor(projectGateway: ProjectGateway) {
    this.projectGateway = projectGateway;
  }

  create(project: CreateProjectModel) {
    return this.projectGateway.create(project);
  }

  getConfig(id: string) {
    return this.projectGateway.getConfig(id);
  }

  // TODO disable api
  getMember(id: string) {
    return this.projectGateway.getMember(id);
  }
}
