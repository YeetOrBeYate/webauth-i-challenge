const express = require('express');
const qs = require("./user-Model");
const router = express.Router();

router.get("/", (req,res)=>{
    qs.getAll()
    .then(list=>{
        res.status(200).json({list})
    })
    .catch(err=>{
        res.status(500).json({err})
    })
})


module.exports = router;