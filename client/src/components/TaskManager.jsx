import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskList from './TaskList';
import AddTask from './AddTask';
import { clearError, fetchTasks } from '../slices/tasksSlice';
import { logout } from '../slices/authSlice'; // Import the logout action
import { toast } from 'react-hot-toast';

function TaskManager() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.items);
  const status = useSelector((state) => state.tasks.status);
  const error = useSelector((state) => state.tasks.error);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    return () => dispatch(clearError());
  }, [error, dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto px-2">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 min-h-[400px] bg-gradient-to-r from-gray-100 to-gray-200">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Welcome {user.username}
          </h1>
          <button
            className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded mb-4 absolute -bottom-1 left-8 right-8"
            onClick={handleLogout}
          >
            Logout
          </button>
          <AddTask />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

export default TaskManager;
