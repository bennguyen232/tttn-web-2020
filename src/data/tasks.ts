import {TasksData, Task, Tag} from '../app/models';

const TAGS_DATA = ['Todo', 'Specified', 'In Progress', 'Ready To Test', 'Done'];

const TAGS: Tag[] = TAGS_DATA.map((item, index) => ({
  id: `tag-${index}`,
  name: item,
}));

const generateTasks = () => {
  const tasks: Task[] = [];
  const num = Math.floor(Math.random() * 11);
  for (let index = 0; index < num; index++) {
    tasks.push({
      id: `task-${index}`,
      name: `Your task ${index}`,
    });
  }
  return tasks;
};

export const TASKS_DATA: TasksData = TAGS.map((item) => ({
  tag: item,
  tasks: generateTasks(),
}));
