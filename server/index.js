const app = require("../server/app")
const db = require("./database/index")
const port = 3000


app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`)
})