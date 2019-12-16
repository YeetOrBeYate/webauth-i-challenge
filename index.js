const express = require('express');
const UserRouter = require("./User/user-Router");
const RegRouter = require("./Register/reg-Router");
const LoginR = require("./Login/Login-Router");
const app = express();

app.use(express.json());
app.use('/users', UserRouter);
app.use('/register',RegRouter);
app.use('/login', LoginR )

const port = 8080;
app.listen(port, ()=>{console.log("yeet on", port)})