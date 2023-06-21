const mongoose = require('mongoose')
require('dotenv').config()

const db = process.env.MONGO

const connectDb = async ()=>{
    try{
        // console.log(db)
        await mongoose.connect(db)
        console.log("Mongo Database Connected")
    }catch(err){
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectDb