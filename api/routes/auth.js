const express = require('express')
const router = express.Router()

// @route       GET /api/auth
// @desc        Get User from jwt without password 
// @access      public

router.get('/', (req, res)=>{
    res.send("asd")
})

// @route       POST api/auth
// @desc        Login and authentication
// @access      public
router.post('/', [
    body('email').isEmail().withMessage('please include a valid email'),
    body('password').exists().withMessage('password is required')
],
async (req, res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const {email, password} = req.body

    try{
        let user = await User.findOne({email})
        if(!user) {
            return res.status(400).json({msg:'Email not registered'})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({msg:'invalid password'})
        }

        const payload = {
            user:{
                id: user.id
            }
        }
        
        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn:360000,
        }, (err, token) => {
            if(err) throw err
            res.json({token})
        }) 
    }
    catch(err){
        console.error(err.message)
        res.status(500).send(err.message) 
    }
})

module.exports = router