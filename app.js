var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res){
	res.render("game.ejs");
});

app.listen( process.env.PORT || 3000, process.env.IP );