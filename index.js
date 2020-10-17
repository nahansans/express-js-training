const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (request, response) => response.json({ info: 'Node.js, Express, and Postgres API' }))

app.listen(port, () => console.log(`App running on port ${port}.`))