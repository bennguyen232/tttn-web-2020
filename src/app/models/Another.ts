export interface Sprint {
  Id: string;
  Name: string;
  Description: string;
}

export interface CreateProjectModel {
  Name: string;
  Description: string;
  UrlImage?: string;
}
