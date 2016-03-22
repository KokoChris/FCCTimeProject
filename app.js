var express = require("express"),
    moment  = require("moment"),
    app     = express();



app.get("/", function(req,res){
	res.json("Hey");
});

app.listen(3000,function(){
	console.log("Server has started!!");
});
