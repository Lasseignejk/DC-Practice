const Pool = require("pg").Pool

const creds = new Pool({
    host: "localhost",
    port: 5432,
    database: "todolist",
    user: "postgres",
    // this is where you write your password from your env file
    password: process.env.PASSWORD
})

module.exports = creds