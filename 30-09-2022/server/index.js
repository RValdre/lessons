// ES5 vs ES6 import
const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = 8080
const catsRoutes = require('./routes/cats.routes')

app.use(morgan('dev'))
app.use(express.json()) // body-parser asemel

app.use('/cats', catsRoutes)

// CRUD
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/flights/:from-:to', (req, res) => {
  console.log(req.body)

  res.send({
    params: req.params,
    body: req.body,
  })
})

app.get('*', (req, res) => {
  res.send('404')
})

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})
