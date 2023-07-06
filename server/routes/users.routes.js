const express = require("express")
const router = express.Router()

const { getAllUsers, addUser,deleteUser,updateUser } = require("../controllers/users");
const { authenticate } = require("../controllers/signAndLog");


router.get("/getAll",getAllUsers)
router.post("/add",addUser)
router.delete("/:idusers",deleteUser)
router.put("/:idusers",updateUser)
router.post("/authentication",authenticate)
module.exports = router;

