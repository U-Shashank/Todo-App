import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as api from './api'

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (_, { rejectWithValue }) => {
  const response = await api.fetchTasks()
  if(!response.data.success) {
    return rejectWithValue(response.data.msg)
  }
  console.log(response.data)
  
  return response.data.tasks
})

export const addTask = createAsyncThunk('tasks/addTask', async (task,{ rejectWithValue }) => {
  const response = await api.addTask(task)
  if(!response.data.success) {
    return rejectWithValue(response.data.msg)
  }
  return response.data.task
})

export const updateTask = createAsyncThunk('tasks/updateTask', async ({ id, task },{ rejectWithValue }) => {
  const response = await api.updateTask(id, task)
  if(!response.data.success) {
    return rejectWithValue(response.data.msg)
  }
  return response.data.task
})

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id, { rejectWithValue }) => {
  const response = await api.deleteTask(id)
  if(!response.data.success) {
    return rejectWithValue(response.data.msg)
  }
  return id
})

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload || 'Something went wrong'
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.items.push(action.payload)
      })
      .addCase(addTask.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload || 'Something went wrong'
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.items.findIndex((task) => task._id === action.payload._id)
        if (index !== -1) {
          state.items[index] = action.payload
        }
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload || 'Something went wrong'
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter((task) => task._id !== action.payload)
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload || 'Something went wrong'
      })
    },
})

export const { clearError } = tasksSlice.actions
export default tasksSlice.reducer