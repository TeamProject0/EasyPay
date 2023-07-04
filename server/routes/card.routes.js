const express = require("express")
const router = express.Router()

<<<<<<< HEAD
const { getAllCard, addCard,updateCard } = require("../controllers/card");


router.get("/getAll",getAllCard)
router.post("/add",addCard)
router.put("/:idcards",updateCard)
=======
const { getAllCard, addCard,deleteCard, addBalance, } = require("../controllers/card");


router.get("/getAll",getAllCard)
router.post("/add/:iduser",addCard)
router.delete("/delete/:idcards",deleteCard)
router.put("/update/:idcards",addBalance)
>>>>>>> 9b0180bcd44468ba31b9af793666e4ae1264de87
module.exports = router;