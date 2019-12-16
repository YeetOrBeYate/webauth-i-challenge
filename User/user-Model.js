const db = require("../data/db.js");


const getAll=()=>{
    return db
    .select('*')
    .from("user")
}




module.exports={
    getAll
}