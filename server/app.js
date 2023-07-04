const express = require('express');
const app = express();
app.use(express.json());

const usersRoute = require("./routes/users.routes")
const cardRoute = require("./routes/card.routes")


app.use("/users",usersRoute)
app.use("/cards",cardRoute)


module.exports = app