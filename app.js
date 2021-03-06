var express = require("express"),
    fs = require("fs");
var app = express();
var bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    cookieParser = require("cookie-parser"),
    LocalStrategy = require("passport-local");
    //flash        = require("connect-flash"),
    //Campground  = require("./models/campground"),
    //Comment     = require("./models/comment"),
    //User        = require("./models/user"),
    //session = require("express-session"),
    //seedDB      = require("./seeds"),
    //methodOverride = require("method-override");

//requiring routes
//var commentRoutes    = require("./routes/comments"),
  //  studyspaceRoutes = require("./routes/studyspaces"),
    //indexRoutes      = require("./routes/index");

//MongoDB Atlas webAppDemoUsr Kathryn1998
app.use(bodyParser.urlencoded({extended: true}));
/*mongoose.connect("mongodb://localhost/wheretostudy_db",{
    server: {
      socketOptions: {
        socketTimeoutMS: 0,
        connectionTimeout: 0
      }
    }
  });*/
 
mongoose.connect("mongodb+srv://webAppDemoUsr:Kathryn1998@cluster0-3d681.mongodb.net/test?retryWrites=true&w=majority");
app.use(express.static("assets"));//when reference allways go to /assets/...
app.set("view engine", "ejs"); //to eliminate writnig .ejs every time
//app.use(methodOverride('_method'));
app.use(cookieParser('secret'));

//routes
app.get("/",function(req,res){
    res.render("home");// home.ejs
});
app.get("/clearbancHireMe",function(req,res){
    res.render("clearbanc");//clearbanc.ejs
});
app.get("/.well-known/acme-challenge/ZtzN2DPzU5dtUmTSo_v9p_Rz2wfPRqPJ2tg5CmPjPF0",function(req, res){
    res.render("challenge");
});
app.get("/.well-known/acme-challenge/isJ5U5lQlMGtxUJvHM-hM-L9Ih4Wm8AiYvRPFpUF3Qg",function(req, res){
    res.render("challenge2");
});

app.get('/resume', function (req, res) {
    var filePath = "/views/kathrynxing_resume_v2.5.pdf";

    fs.readFile(__dirname + filePath , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});

/** WhereToStudy DEMO */
var studySpaces = [
    {name: "SLC", image: "/imgs/pattern1.jpeg" },
    {name: "St. Paul", image: "/imgs/pattern2.jpeg"}
]
var studyspaceSchema= new mongoose.Schema({
    name:String,
    image: String
});
var Studyspace = mongoose.model("Studyspace", studyspaceSchema);
app.get("/WhereToStudyDEMO",function(req,res){
    res.render("WTSlanding");

});
app.get("/WhereToStudyDEMO/studyspaces",function(req,res){
    Studyspace.find({},function(err,allStudyspaces){
        if(err){console.log(err);}else{res.render("WTSstudyspaces/WTSstudyspaces", {Spaces:allStudyspaces});}
    });
    
});
app.post("/WhereToStudyDEMO/studyspaces",function(req,res){
   // res.send("this is spaces to be filled");
    var name = req.body.name;
    var img = req.body.image;
    var newSpace = {name:name, image:img};
    Studyspace.create(newSpace,function(err, newlyCreated){
        if(err){console.log(err);}else{res.redirect("/WhereToStudyDEMO/studyspaces");}
    });

});

app.get("/WhereToStudyDEMO/studyspaces/new",function(req,res){
    res.render("WTSstudyspaces/new");
});


var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server Has Started!");
  });