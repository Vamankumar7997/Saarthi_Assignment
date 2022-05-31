const express = require("express");
const { getAllUser } = require("../")
const router = express.Router();

router.get("/", getAllUser)

module.exports = router;