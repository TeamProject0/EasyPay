const express = require('express');
const cors = require("cors")
const app = express();
require('dotenv').config()
app.use(express.json());
app.use(cors())

const usersRoute = require("./routes/users.routes")
const cardRoute = require("./routes/card.routes")
const histroyRoute = require("./routes/history.routes")

app.use("/users",usersRoute)
app.use("/cards",cardRoute)
app.use("/history",histroyRoute)

module.exports = app

