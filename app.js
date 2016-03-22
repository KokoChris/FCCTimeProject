var express = require("express"),
    moment  = require("moment"),
    app     = express();

app.get("/",function (req,res) {

	res.send("This is the root route!");
});


app.get("/:dateFormat", function(req,res){

	var m = req.params.detFormat;
	console.log(moment().unix());
	

	res.redirect("/");
	//console.log(moment(req.params));
	//res.json(req.param);
});

app.listen(3000,function(){
	console.log("Server has started!!");
});
