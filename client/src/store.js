import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './slices/tasksSlice'
const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export default store