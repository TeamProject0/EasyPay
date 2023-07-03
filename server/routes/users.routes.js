const express = require("express")
const router = express.Router()

const { getAllUsers, addUser,deleteUser,updateUser } = require("../controllers/users");


router.get("/getAll",getAllUsers)
router.get("/add",addUser)
router.get("/:iduser",deleteUser)
router.get("/:iduser",updateUser)
module.exports = router;

