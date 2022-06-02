const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "Set run and g0",
    host: "localhost",
    port: "5432",
    database: "classroom"
})
module.exports = pool;