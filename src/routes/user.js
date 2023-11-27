const express = require('express')
const router = express()
const userController = require('../controller/user')

router.get("/", userController.getAllUsers)
router.post("/", userController.insertNewUser)

module.exports = router