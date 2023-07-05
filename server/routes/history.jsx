const express = require("express")
const router = express.Router()
const { getAllHistory } = require("../controllers/history");


router.get("/" , getAllHistory)