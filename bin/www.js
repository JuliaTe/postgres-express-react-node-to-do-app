// Setting up application entry and application server
const http = require('http')
const app = require('../app') // The express app

const port = parseInt(process.env.PORT, 10) | 8000
app.set('port', port)

const server = ttp.createServer(app)
erver.listen(port)