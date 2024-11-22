import { useState } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, addTask, toggleTaskCompletion, deleteTask, editTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAdd = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <div className="input-group">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a task"
          className="input"
        />
        <button className="btn btn-add" onClick={handleAdd} >Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
