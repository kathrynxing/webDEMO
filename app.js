var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("assets"));//when reference allways go to /assets/...
app.set("view engine", "ejs"); //to eliminate writnig .ejs every time
//routes
app.get("/",function(req,res){
    res.render("home");// home.ejs
});
app.get("/clearbancHireMe",function(req,res){
    res.render("clearbanc");//clearbanc.ejs
});

/** WhereToStudy DEMO */
var studySpaces = [
    {name: "SLC", image: "imgs/pattern1.jpeg" },
    {name: "St. Paul", image: "imgs/pattern2.jpeg"}
]

app.get("/WhereToStudyDEMO",function(req,res){
    res.render("WhereToStudylanding", {Spaces:studySpaces});

});
app.get("WhereToStudyDEMO/studyspaces",function(req,res){
    res.render("WhereToStudylanding", {Spaces:studySpaces});
});
app.post("/WhereToStudyDEMO/studyspaces",function(req,res){
    res.send("this is spaces to be filled");
});


app.get("WhereToStudyDEMO/studyspaces/new",function(req,res){
    res.send("a form goes here");
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server Has Started!");
  });