import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTask } from './actions';

const App = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (description) => {
    const id = Date.now();
    dispatch(addTask(id, description));
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <input
        type="text"
        placeholder="Enter task description"
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            handleAddTask(e.target.value);
            e.target.value = '';
          }
        }}
      />
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span
              style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}
              onClick={() => handleToggleTask(task.id)}
            >
              {task.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
