const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
  res.json({ messaege: 'there are people here' })
})

app.listen(3000, () => {
  console.log('server is up')
})
