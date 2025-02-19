const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware.js');
const connectDB = require('./config/db.js');
const port = process.env.PORT || 3001

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended : false }))


app.use( '/api/users' , require('./routes/userRoutes'))
app.use( '/api/conversations' , require('./routes/conversationsRoutes'))
app.use( '/api/messages' , require('./routes/messagesRoutes'))

app.use(errorHandler)
app.listen(port , () => console.log(`Server listening on port ${port}`))