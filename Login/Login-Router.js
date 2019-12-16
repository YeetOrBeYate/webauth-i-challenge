const express = require('express');
const bcrypt = require('bcrypt');
const qs = require('./Login-Model');
const router = express.Router();

router.post("/", (req,res)=>{
    const body = req.body;

   qs.login(body.username)
   .then(user=>{
       if(user && bcrypt.compareSync(body.password, user.password)){
           res.status(200).json((user))
       }else{
           res.status(401).json({message: 'wrong credentials'})
       }
   })
   .catch(err=>{
       res.status(500).json({err})
   })
})

module.exports = router;