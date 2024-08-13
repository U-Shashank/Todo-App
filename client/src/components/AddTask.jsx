import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../slices/tasksSlice'

function AddTask() {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user);


  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim()) {
      dispatch(addTask({ name, completed: false, createdBy: user._id }))
      setName('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex items-center border-b-2 border-cyan-500 py-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add a new task..."
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
        <button
          type="submit"
          className="flex-shrink-0 bg-cyan-500 hover:bg-cyan-700 border-cyan-500 hover:border-cyan-700 text-sm border-4 text-white py-1 px-2 rounded"
        >
          Add
        </button>
      </div>
    </form>
  )
}

export default AddTask