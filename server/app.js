const express = require('express');
const app = express();
app.use(express.json());

const usersRoute = require("./routes/users.routes")

app.use("/users",usersRoute)

module.exports = app