export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const addTask = (id, description) => ({
  type: ADD_TASK,
  payload: { id, description, isDone: false }
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id }
});
