export const deleteTask = (id) => ({
  type: 'DEL_TASK',
  payload: id,
});

export const saveTask = (id, title, description, priority, complited) => ({
  type: 'SAVE_TASK',
  id,
  title, 
  description, 
  priority, 
  complited
});

export const sortTaskList = (filter) => ({
  type: 'SORT_TASK_LIST',
  payload: filter
});