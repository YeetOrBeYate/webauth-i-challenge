const express = require('express');
const bcrypt = require('bcrypt');
const qs = require('./Login-Model');
const router = express.Router();

router.post("/", (req,res)=>{
    const body = req.body;

   qs.login(body.username)
   .then(user=>{
       if(user && bcrypt.compareSync(body.password, user.password)){
           //reqesting that the session now has a user property
           req.session.user = user;
           res.status(200).json((user))
       }else{
           res.status(401).json({message: 'wrong credentials'})
       }
   })
   .catch(err=>{
       res.status(500).json({err})
   })
})

router.get("/logout", (req,res)=>{
    if(req.session && req.session.user){
        req.session.destroy(err=>{
            if(err){
                res.status(500).json({message: "Error logging you out"})
            }else{
                res.status(201).json({message: "GoodBye, succesfully logged out!"})
            }
        })
    }else{
        res.status(500).json({message: "Can't log you out, maybe you were never in?"})
    }
})

module.exports = router;