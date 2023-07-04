const express = require("express")
const router = express.Router()

const { getAllCard, addCard,updateCard } = require("../controllers/card");


router.get("/getAll",getAllCard)
router.post("/add",addCard)
router.put("/:idcards",updateCard)
module.exports = router;