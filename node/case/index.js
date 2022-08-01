const express = require('express')
const app = express()
app.listen(8080,() =>{
    console.log('index.js running at localhost');
})

app.use(express.static('./tech/'))