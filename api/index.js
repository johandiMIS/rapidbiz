const express = require('express')
const connectDb = require('./config/db')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 5000
var cors = require('cors')

app.use(express.json({extended:false}))
app.use(cors())

connectDb()

app.get("/", (req, res)=>{
    const data = process.env.MONGO
    res.send(data)
})

app.use('/api/auth', require('./routes/auth'))
app.use('/api/user', require('./routes/user'))

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)})