const express = require('express')
const router = express.Router()
const { authenticateUser } = require('../middlewares/authMiddleware')
const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
} = require('../controllers/tasks')

router.route('/').all(authenticateUser).get(getAllTasks).post(createTask)
router.route('/:id').all(authenticateUser).get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router