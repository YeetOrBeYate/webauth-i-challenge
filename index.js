const express = require('express');
const UserRouter = require("./User/user-Router");
const app = express();

app.use(express.json());
app.use('/users', UserRouter);

const port = 8080;
app.listen(port, ()=>{console.log("yeet on", port)})