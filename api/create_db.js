const pgtools = require("pgtools");
const {configs, pool} = require("./db_configs");

//creating a postgres database
pgtools.createdb(configs, "qandadb", (err, res) => {
  if (err){
    console.error(err);
    process.exit(-1);
  }
  console.log(res);
  pool.query("CREATE TABLE entries(id SERIAL PRIMARY KEY, type VARCHAR(40) NOT NULL, text VARCHAR(500) NOT NULL)", (err, res) => {
    if (err){
      console.error(err)
    }
    console.log(res);
    pool.end();
  });
});


