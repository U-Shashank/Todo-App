import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import { clearError, fetchTasks } from './slices/tasksSlice';
import { toast } from 'react-hot-toast'

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.items);
  const status = useSelector((state) => state.tasks.status);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error)
    }
    return () => dispatch(clearError())
  }, [error])

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Task Manager</h1>
          <AddTask />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

export default App;