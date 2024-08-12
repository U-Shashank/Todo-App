const express = require('express')
const cors = require('cors')
require('dotenv').config()

const connectDB = require('./config/db')
// import notFound from './middlewares/not-found.js'

const taskRouter = require('./routes/tasks')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/task', taskRouter)


app.get("/api/v1", (req, res) => {
    res.send("Home page")
})

// app.use(notFound)

const port = process.env.PORT || 3000

const start = async () => {
    await connectDB()
    app.listen(port, () => console.log(`listening on port ${port} ...`))
}

start()