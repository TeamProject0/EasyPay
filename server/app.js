const express = require('express');
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors())

const usersRoute = require("./routes/users.routes")
const cardRoute = require("./routes/card.routes")
const historyRoute = require("./routes/history")


app.use("/users",usersRoute)
app.use("/cards",cardRoute)
app.use("/history", historyRoute)


module.exports = app