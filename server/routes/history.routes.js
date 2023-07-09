const express = require("express")
const router = express.Router()


const { getAllHistory , addHistory , deleteAll} = require("../controllers/history");


router.get("/" , getAllHistory)
router.post("/add" , addHistory)
router.delete("/del" , deleteAll)

module.exports = router;