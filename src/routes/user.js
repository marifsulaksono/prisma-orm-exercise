const express = require('express')
const router = express()
const userController = require('../controller/user')

router.get("/", userController.getAllUsers)
router.post("/", userController.insertNewUser)
router.put("/:id", userController.updateUser)

module.exports = router