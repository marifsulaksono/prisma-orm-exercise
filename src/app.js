const express = require('express')
const app = express()
const userRoutes = require('./routes/user')
const postRoutes = require('./routes/post')
const port = 3000

app.use(express.json())

app.use("/posts", postRoutes)
app.use("/users", userRoutes)

app.listen(port, () => {
    console.log(`server start at localhost:${port}`)
})