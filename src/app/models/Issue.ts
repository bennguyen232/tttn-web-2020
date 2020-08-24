interface CustomCreateIssue {
  Summary: string;
  Description?: string;
  ProjectId: string;
  IssueParentId?: string;
  AssigneeId: string;
}

export interface CreateIssueForm extends CustomCreateIssue {
  IssueTypeId: string;
  PriorityId: string;
  StoryPointId: string;
}

export interface CreateIssueRequest extends CustomCreateIssue {
  /**
   * issueType, priorityId, storyPointId,
   */
  CustomsId: string[];
}

export interface IssueType {
  Id: string;
  Name: string;
  ContentTypeDescription: string;
  IconName: string;
  Styles: string;
  CategoryTypeId: string;
  CategoryTypeName: string;
  CategoryTypeDescription: string;
  IsActive: true;
  IsDefault: true;
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
  UserCreatedId: string;
  AssigneeId: string;
  IssueTypes: {
    Priority: IssueType;
    StoryPoint?: IssueType;
  };
}
