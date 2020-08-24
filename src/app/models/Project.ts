export interface Project {
  CreatedAt: string;
  Description: string;
  Id: string;
  Name: string;
  UrlImage: string;
  UserCreatedId: string;
}

export interface Member {
  Id: string;
  Address: string;
  FirstName: string;
  LastName: string;
  Gender: boolean;
  RoleDescription: string;
  RoleName: string;
  UserName: string;
}
