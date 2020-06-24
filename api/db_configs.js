
const Pool = require("pg").Pool;


//postgres environment configs 
//TODO:change this to .env file if possible and add it to .gitignore
const configs = {
    user: "postgres",
    host: "localhost",
    password:"testtest",
    port: "5432"
}
const pool = new Pool ({
    user: "postgres",
    host: "localhost",
    database: "qandadb",
    password:"testtest",
    port: "5432"
});

module.exports = {
    configs,
    pool
}