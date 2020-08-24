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
}
