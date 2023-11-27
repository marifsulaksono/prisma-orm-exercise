const express = require('express')
const router = express()
const userController = require('../controller/user')

router.get("/", userController.getAllUsers)
router.get("/:id", userController.getUserById)
router.post("/", userController.insertNewUser)
router.put("/:id", userController.updateUser)
router.delete("/:id", userController.deleteUser)

module.exports = router