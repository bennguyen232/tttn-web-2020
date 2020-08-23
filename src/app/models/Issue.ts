import {ResultAccount} from './Account';
import {Sprint} from './Another';

export interface CreateIssueType {
  Summary: string;
  Note?: string;
  ProjectId: string;
  SprintId: string;
  IssueParentId?: string;
  UserCreatedId: string;
  AssigneeId: string;
  CustomsId: string[];
}

export interface IssueType {
  Id: string;
  Summary: string;
  Note?: string;
  ProjectId: string;
  Sprint: Sprint;
  IssueParent?: string;
  UserCreated: ResultAccount;
  Assignee: ResultAccount;
  IsActive?: boolean;
  CreatedAt: string;
  UpdatedAt: string;
}
