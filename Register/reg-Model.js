const db = require("../data/db.js");
const getbyid = require("../User/user-Model");

const add =(user, pass)=>{
    return db('user')
    .insert([{username: user, password: pass }])
    .then(ids=>{
        return getbyid.getById(ids[0]);
    })
}

module.exports={
    add
}