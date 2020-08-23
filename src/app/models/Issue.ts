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

interface CategoryType {
  Id: string;
  Name: string;
  Description: string;
}

interface IssueType {
  Id: string;
  Name: string;
  Description: string;
  IconName: string;
  Styles: string;
  CategoryTypeId: string;
}

export interface Issue {
  Id: string;
  Summary: string;
  Description: string;
  IsActive?: boolean;
  CreatedAt: Date;
  UpdatedAt: Date;
  IssueParentId?: string;
  ProjectId: string;
  SprintId: string;
  UserCreatedId: string;
  AssigneeId: string;
  IssueTypes: {
    Priority?: IssueType[];
    StoryPoint?: IssueType[];
  };
}
