export interface Task {
  id: string;
  name: string;
}

export type Tasks = {
  tag: Tag;
  tasks: Task[];
};

export type TasksData = Tasks[];

export interface Tag {
  id: string;
  name: string;
}
