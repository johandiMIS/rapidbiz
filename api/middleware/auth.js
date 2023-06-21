const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = function (req, res, next){
    //get token from header
    const token = req.header('x-auth-token')

    //check if no token
    if(!token){
        return res.status(400).json({errors:'no token, authorization denied'})
    }

    try{
        const decoded = jwt.verify(token, process.env.JWTSecret)

        req.user = decoded.user
        next()
    }
    catch(err){
        res.status(401).json({errors: 'Token Is Not Vaild'})
    }
}