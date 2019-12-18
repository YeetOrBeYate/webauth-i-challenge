const db = require("../data/db.js");

const FindUser=(user)=>{
    return db 
    .select('*')
    .where("username", user)
}

const login = (user)=>{

    return db
    .select('*')
    .from("user")
    .where({username: user})
    .first()

}

module.exports={
    login
}