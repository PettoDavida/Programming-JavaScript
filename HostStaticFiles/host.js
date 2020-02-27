const express = require('express')
const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencode())

app.get('/', (req,res) => res.sendFile(__dirname + '\\index.html'))

app.get('/a', (req,res) =>{
  res.sendFile(__dirname + '\\index.css')
})

app.get('/b', (req,res) => {
  res.sendFile(__dirname + '\\index.jpg')
})

app.post('/login', function (req, res) {
  console.log(req.body)
  res.send('Great Success Comrade!')
})

