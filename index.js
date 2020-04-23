const express = require('express')
const app = express()
var cors = require('cors')
var helmet = require('helmet')
var route = require('./route')(app);
const port = process.env.PORT || 8080

app.use(express.static('public'))
app.use(helmet())
app.use(cors())


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
