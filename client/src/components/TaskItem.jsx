import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTask, deleteTask } from '../slices/tasksSlice';

function TaskItem({ task }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(updateTask({ id: task._id, task: { ...task, completed: !task.completed } }));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task._id));
  };

  return (
    <li className="flex items-center space-x-3">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
        className="h-6 w-6 text-cyan-500 rounded-md border-gray-300 focus:ring-cyan-500 cursor-pointer"
      />
      <span
        className={`flex-1 text-lg ${
          task.completed ? 'line-through text-gray-400' : 'text-gray-800'
        }`}
      >
        {task.name}
      </span>
      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </li>
  );
}

export default TaskItem;