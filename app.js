var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs"); //to eliminate writnig .ejs every time

app.get("/",function(req,res){
    //res.render("home");
    res.render("home");
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server Has Started!");
  });