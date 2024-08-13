import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_BASE_URL

// Task APIs
export const fetchTasks = () => axios.get(`${API_BASE_URL}/task`, {
    headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
})

export const addTask = (task) => axios.post(`${API_BASE_URL}/task`, task, {
    headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
})

export const getTask = (id) => axios.get(`${API_BASE_URL}/task/${id}`, {
    headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
})

export const updateTask = (id, task) => axios.patch(`${API_BASE_URL}/task/${id}`, task, {
    headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
})

export const deleteTask = (id) => axios.delete(`${API_BASE_URL}/task/${id}`, {
    headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
})


// Auth APIs
export const loginUser = (credentials) => axios.post(`${API_BASE_URL}/auth/login`, credentials)

export const registerUser = (userData) => axios.post(`${API_BASE_URL}/auth/register`, userData)