var express = require("express"),
    moment  = require("moment"),
    port    = process.env.PORT || 3000,
    app     = express();

app.use(express.static('public'));

app.get("/",function (req,res) {
	
	res.send(req.headers);
});



app.get("/:dateFormat", function(req,res){

	var m = req.params.dateFormat;
	
	if(moment(m,["x","MMMM DD YYYY","MMMM D YYYY"],true).isValid()){
		res.json(
			{
				natural: moment(m,["X","MMMM DD YYYY","MMMM D YYYY"]).format("MMMM DD YYYY"),
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

app.listen(port,function(){
	console.log("Server has started!!");
});
