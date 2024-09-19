import React, { useState } from 'react';

const TaskItem = ({ task, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    editTask(editedTask);
    setIsEditing(false);
  };

  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask.name}
            onChange={(e) =>
              setEditedTask({ ...editedTask, name: e.target.value })
            }
          />
          <input
            type="text"
            value={editedTask.description}
            onChange={(e) =>
              setEditedTask({ ...editedTask, description: e.target.value })
            }
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button onClick={() => editTask({ ...task, completed: !task.completed })}>
            {task.completed ? 'Mark Incomplete' : 'Mark Completed'}
          </button>
          <button onClick={handleEditToggle}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
