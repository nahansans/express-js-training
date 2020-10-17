const { request, response } = require('express')
const { Pool } = require('pg')


const pool = new Pool({
    user: 'wksgcnumpojhkd',
    host: 'ec2-34-233-43-35.compute-1.amazonaws.com',
    database: 'dbh0vhq9a885j1',
    password: '7d4375b87a9c88b00fc1abf007779ffb01649bbf43a9afc4d80702edab8da82f',
    port: 5432,
    url: 'postgres://wksgcnumpojhkd:7d4375b87a9c88b00fc1abf007779ffb01649bbf43a9afc4d80702edab8da82f@ec2-34-233-43-35.compute-1.amazonaws.com:5432/dbh0vhq9a885j1'
})

const users = [
    {
        id: 1,
        name: "Hanif"
    },
    {
        id: 2,
        name: "Naufal"
    },
    {
        id: 3,
        name: "heroku"
    }
]

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error
        }
        
        response.status(200).json({
            status: 'success',
            info: `Successfully get users data`,
            data: results.rows.map(result => ({ ...result, password: undefined }))
        })
    })
}

module.exports = {
    getUsers,
}