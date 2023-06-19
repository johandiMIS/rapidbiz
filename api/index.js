const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({extended:false}))

app.get("/", (req, res)=>{
    const data = process.env.MONGO
    res.send(data)
})

// app.use('/api/auth', require('./routes/auth'))

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)})