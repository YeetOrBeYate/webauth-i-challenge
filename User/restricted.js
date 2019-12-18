const bcrypt = require('bcrypt');


module.exports = (req,res,next)=>{

    if(req.session && req.session.user){
        next()
    }else{
        res.status(401).json({message: 'AREA DENIED'})
    }
}