import { useState } from 'react';

const ToDoItem = ({ task, toggleTaskCompletion, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li className="task">
      <div className="task-content">
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="task-input"
          />
        ) : (
          <span
            onClick={() => toggleTaskCompletion(task.id)}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? 'gray' : 'black',
            }}
          >
            {task.text}
          </span>
        )}
      </div>
      <div className="task-buttons">
        {isEditing ? (
          <button className="btn btn-save" onClick={handleEdit}>
            Save
          </button>
        ) : (
          <button className="btn btn-edit" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
        <button className="btn btn-delete" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
