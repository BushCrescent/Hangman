const router = require("express").Router();
const connection = require("../config/connection");

router.get("/api/words", (req, res) => {
    //get the data from the database
    connection.query(`SELECT * FROM hangman`,(err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

// router.post("/api/words", (req, res) => {
//     //get the data from the database
//     connection.query(`SELECT * FROM hangman`,(err, data) => {
//         console.log("words", data);
//         res.json(data);
//     });
// });

module.exports = router;