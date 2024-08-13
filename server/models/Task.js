const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.ObjectId,
        ref:"User"
    },
})

module.exports = mongoose.model('Task', TaskSchema)