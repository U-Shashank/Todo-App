import axios from 'axios'

const API_BASE_URL = 'http://localhost:3000/api/v1/task'
export const fetchTasks = () => axios.get(API_BASE_URL)

export const addTask = (task) => axios.post(API_BASE_URL, task)

export const getTask = (id) => axios.get(`${API_BASE_URL}/${id}`)

export const updateTask = (id, task) => axios.patch(`${API_BASE_URL}/${id}`, task)

export const deleteTask = (id) => axios.delete(`${API_BASE_URL}/${id}`)