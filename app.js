var express = require("express"),
    moment  = require("moment"),
    app     = express();

app.get("/",function (req,res) {

	res.send("This is the root route!");
});


app.get("/:dateFormat", function(req,res){

	var m = req.params.dateFormat;
	
	if(moment(m,["x","MMMM DD YYYY"],true).isValid()){
		res.json(
			{
				natural: moment(m,["X","MMMM DD YYYY"]).format(),
			    unix:   moment(m,["X","MMMM DD YYYY"]).unix()
			}
		);
	
	}else{
		res.json(
			{
				natural: null,
			    unix:   null
			}
		);
	}
});

app.listen(3000,function(){
	console.log("Server has started!!");
});
