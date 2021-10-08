// Import express module
const express = require('express')

// Instantiates express app
const app = express()

// Middleware
// parses request body to json
app.use(express.json())

// parses urlencoded query string
app.use(express.urlencoded({ extended: true }))

// Routes
app.get('/', (_req, res) => {
  res.json({ messaege: 'there are people here' })
})

app.post('/product', (req, res) => {
  console.log(req.body)
  res.send('Data don reach here')
})

//Start the express app
app.listen(3000, () => {
  console.log('server is up')
})
