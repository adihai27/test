const express = require("express")
const app = express()

app.listen(5001, ()=> {
    console.log("port connected on port 5001");
})

app.get('/', (req, res) => {
    res.render("index.ejs")
})