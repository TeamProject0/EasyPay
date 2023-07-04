const express = require("express")
const router = express.Router()

const { getAllCard, addCard,deleteCard, addBalance, } = require("../controllers/card");


router.get("/getAll",getAllCard)
router.post("/add/:iduser",addCard)
router.delete("/delete/:idcards",deleteCard)
router.put("/update/:idcards",addBalance)
module.exports = router;