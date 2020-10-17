const { response } = require('express')
const express = require('express')
const formidable = require('express-formidable')
const app = express()
const db = require('./queries')
const port = process.env.PORT || 3000

app.get('/', (request, response) => response.json({ info: 'Node.js, Express, and Postgres API' }))

app.listen(port, () => console.log(`App running on port ${port}.`))

app.get('/users', db.getUsers)