const express = require("express")
const { json } = require("body-parser")

const app = express()

app.use(express.static(`${__dirname}/../build`))

const port = 3002
app.use(json())

const path = require("path")
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/../build/index.html"))
})

app.listen(port, () => {
  console.log(`Listening on dat port: ${port}`)
})
