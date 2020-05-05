var express = require('express'),
	app		= express();

var indexRoutes = require('./routes/index');


app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.use(indexRoutes);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function(){
	console.log('server started');
});



