var express = require("express");
var app = express();
app.use(express.static("assets"));
app.set("view engine", "ejs"); //to eliminate writnig .ejs every time
//routes
app.get("/",function(req,res){
    res.render("home");// home.ejs
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server Has Started!");
  });