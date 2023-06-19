const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({extended:false}))

app.get("/", (req, res)=>{
    res.send("hello world")
})

app.use('/api/auth', require('./routes/auth'))

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)})