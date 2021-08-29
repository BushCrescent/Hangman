const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/index.html"));
});

router.get("/hangman", (req, res)=>{
    res.sendFile(path.join(__dirname,"../public/hangman.html"));
})

module.exports = router;