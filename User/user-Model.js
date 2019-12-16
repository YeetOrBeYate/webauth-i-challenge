const db = require("../data/db.js");


const getAll=()=>{
    return db
    .select('*')
    .from("user")
}

const getById=(id)=>{
    return db
    .select("username", "password")
    .from('user')
    .where("id", id)
    .first()
}


module.exports={
    getAll,
    getById
}