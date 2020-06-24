const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {pool} = require("./db_configs");


const app = express();

//require cors

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/entries", async (req, res) => {
    try {
        const allEntries = await pool.query("SELECT * FROM entries");
        res.json(allEntries.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.post("/entries", async (req, res)=>{
    try {
        const entry = {
            type: req.body.type,
            text: req.body.text,
        };

        const newEntry = await pool.query("INSERT INTO entries (type, text) VALUES ($1, $2) RETURNING *", 
        [entry.type, entry.text]);    
        res.json(newEntry.rows[0]); 

    } catch(error) {
        console.error(error.message);
    }
});


//listen on port 8080
app.listen(process.env.PORT || 8085);