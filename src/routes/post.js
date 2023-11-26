const express = require('express')
const router = express()
const postController = require('../controller/post')

router.get("/", postController.getAllPosts)

module.exports = router