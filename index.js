// Import express module
const express = require('express')

// Instantiates express app
const app = express()

// Routes
app.get('/', (req, res) => {
  res.json({ messaege: 'there are people here' })
})

//Start the express app
app.listen(3000, () => {
  console.log('server is up')
})
