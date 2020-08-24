import {IssueGateway} from '../gateways';

export class IssueService {
  private issueGateway: IssueGateway;

  constructor(issueGateway: IssueGateway) {
    this.issueGateway = issueGateway;
  }

  getIssuesByProjectId(id: string) {
    return this.issueGateway.getIssuesByProjectId(id);
  }
}
