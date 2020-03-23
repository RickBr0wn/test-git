const express = require('express')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const app = express()
const userRouter = require('./routes/User')
const PORT = 5000
const URL = 'mongodb://localhost:27017/mernauth'

app.use(cookieParser())
app.use(express.json())

mongoose.connect(
  URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Successfully connected to database.')
  }
)

app.use('/user', userRouter)

app.listen(PORT, () => {
  console.log(`Express server started on port ${PORT}.`)
})
