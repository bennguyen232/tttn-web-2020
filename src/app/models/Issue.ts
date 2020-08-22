// import {ResultAccount} from './Account';
export interface IssueType {
  id: string;
  name: string;
  type: string;
  summary: string;
  note?: string;
  priority: string;
  sprint: string;
  storyPoint: string;
  assignee: string; //ResultAccount;
}
