const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static('www'))

app.listen(port, () => {
    console.log("ตอนนี้ run ที่ http://localhost:" + port)
})
