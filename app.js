const data = require("./MOCK_DATA.json");

const express = require("express");

let app = express();

// console.log(app);

app.get("/", (req, res)=>{
    res.send("Welcome to homepage");
});

app.get("/user", (req, res)=>{
    res.send(JSON.parse(data));
})

app.listen(3000, ()=>{
    console.log("Running on port 3000");
})