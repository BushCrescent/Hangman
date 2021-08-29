const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "LjoSvcHMBqy$",
    database: "hangman_db"
});

connection.connect((err) => {
    if (err) throw err;
});

module.exports = connection;