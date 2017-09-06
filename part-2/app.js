const express = require('express')
let app = express()
let bodyParser = require('body-parser')
let port = 3004
let query = require('./database.js')

app.use( bodyParser.json() );

app.get('/', (req, res)=>{
  query.getAllAvailableRooms()
  .then(rooms=>{
    console.log('this is the room check', rooms)
    res.send('0')
  })
  
})



app.listen(port, ()=>{
  console.log('part 2 of phase 3(version D) server is running on port:', port)
})
