const express = require('express');
const UserRouter = require("./User/user-Router");

const cors = require('cors');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const knex = require("./data/db.js");

const RegRouter = require("./Register/reg-Router");
const LoginR = require("./Login/Login-Router");
const Restrict = require("./User/restricted.js");
const app = express();


const sessionConfig = {
    name: 'Yeet',
    secret: "Weebos unite",
    saveUninitialized: true, // has implications with  GDPR laws
  resave: false,
  //how to store the sessions
  store: new KnexSessionStore({
    //DO NOT FORGET THE NEW KEYWORD
    knex, //imported db
    createTable: true,
    clearInterval: 1000*60*10,

    tablename: 'session',
    sidfieldname: 'sid',

  }),

  cookie:{
    maxAge: 1000*60*10, //10 mins in milliseconds
    secure: false, //if false the cookie is sent over http, if true only sent over https
    httpOnly: true, // if true JS cant access the cookie
  }
}

app.use(express.json());
app.use(cors());
app.use(session(sessionConfig));
app.use('/users', Restrict, UserRouter);
app.use('/register',RegRouter);
app.use('/login', LoginR );

app.get('/session',(req,res)=>{
    const yeet = req.session;
    res.status(200).json({yeet})
})

const port = 8080;
app.listen(port, ()=>{console.log("yeet on", port)})