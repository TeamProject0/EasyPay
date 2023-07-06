const express = require("express")
const router = express.Router()


const { getAllHistory , addHistory } = require("../controllers/history");


router.get("/" , getAllHistory)
router.post("/add" , addHistory)

module.exports = router;