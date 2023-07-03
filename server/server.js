const app = require("./app")
const db = require("./database/index")
const port = 3000


app.listen(port, () => {
  console.log(`Server listening on port : ${port}`)
})