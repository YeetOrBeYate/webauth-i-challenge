const express = require('express');
const bcrypt = require('bcrypt');
const qs = require('./reg-Model');
const router = express.Router();

router.post('/', (req,res)=>{
    const body = req.body;

    bcrypt.hash(body.password, 8)
    .then((hash)=>{
        qs.add(body.username, hash)
        .then((yeet)=>{
            res.status(200).json({yeet})
        })
        .catch(err=>{
            res.status(500).json({err})
        })
    })

})





module.exports = router;