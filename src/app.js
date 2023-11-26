const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.use("/", (req, res) => {
    res.send("hallo arif")
})

app.listen(port, () => {
    console.log(`server start at localhost:${port}`)
})