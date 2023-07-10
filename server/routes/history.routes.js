const express = require("express")
const router = express.Router()


const { getAllHistory , addHistory , deleteAll , getByUserId} = require("../controllers/history");


router.get("/" , getAllHistory)
router.post("/add" , addHistory)
router.delete("/del" , deleteAll)
router.get("/getById/:users_idusers" , getByUserId)

module.exports = router;