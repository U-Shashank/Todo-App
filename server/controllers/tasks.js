const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      createdBy: req.user.id
    })
    res.status(200).json({ success: true, tasks })
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ success: false, msg: "Something went wrong" })
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ success: true, task })
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ success: false, msg: "Something went wrong" })
  }
}

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })
    if (!task) {
      return res.status(404).json({ success: false, msg: `No task with id : ${taskID}` })
    }
    res.status(200).json({ success: true, task })
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ success: false, msg: "Something went wrong" })
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })
    if (!task) {
      return res.status(404).json({ success: false, msg: `No task with id : ${taskID}` })
    }
    res.status(200).json({ success: true, task })
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ success: false, msg: "Something went wrong" })
  }
}

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    })
    if (!task) {
      return res.status(404).json({ success: false, msg: `No task with id : ${taskID}` })
    }
    res.status(200).json({ success: true, task })
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ success: false, msg: "Something went wrong" })
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}