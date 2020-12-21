var express= require("express");
var fs = require("fs");
var path = require("path");
var bodyparser = require("body-parser");

var app = express();
var port = process.env.PORT || 3005;
var jsonparser = bodyparser.json();
var urlencodedparser = bodyparser.urlencoded({extended: false});

app.use(express.static(path.join(__dirname,"/public")))

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"/public/index.html"))
});
// app.get("/login", (req, res) => {
//     res.sendFile(path.join(__dirname, "/public/login.html"))
// });
// app.get("/view", (req, res) => {
//     res.sendFile(path.join(__dirname, "/public/viewing.html"))
// });



app.listen(port)