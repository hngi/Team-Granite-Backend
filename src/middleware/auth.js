const jwtUtil = require('jsonwebtoken')
const serviceUser = require('../models/service_user')

const auth = async (req,res,next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwtUtil.verify(token,process.env.JWT_SECRET)
        const user = await serviceUser.findOne({ email: decoded.email })

        if (!user){
            throw new Error('')
        }
        next()
    }catch (e) {
        res.status(401).json({status:'UnAuthorized', message: 'Request Not permitted', data:null})
    }
}

module.exports = auth