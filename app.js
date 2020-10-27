const express = require('express')
const logger = require('morgan')
const odyParser = require('body-parser')
const bodyParser = require('body-parser')
const { urlencoded } = require('body-parser')

// Set up the express app
const app = express()

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json())
app.use(urlencoded({ extended: false }))

// Setup a default catch-all route that send back a welcome message in JSON format
app.get('*', (req, res) => {
  res.status(200).send({
    message: 'Welcome to the beginning of nothingness.'
  })
})

module.exports = app
