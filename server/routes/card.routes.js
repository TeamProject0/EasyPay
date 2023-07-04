const express = require("express")
const router = express.Router()

const { getAllCard, addCard,deleteCard,updateCard } = require("../controllers/card");


router.get("/getAll",getAllCard)
router.post("/add",addCard)
router.delete("/:idcards",deleteCard)
router.put("/:idcards",updateCard)
module.exports = router;