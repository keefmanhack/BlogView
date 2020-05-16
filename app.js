var express 	= require('express'),
	app			= express();
	bodyParser	= require('body-parser'),
	mongoose	= require('mongoose');

var indexRoutes = require('./routes/index');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.BLOG);

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
var indexRoutes = require('./routes/index');


app.use(indexRoutes);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function(){
	console.log('BlogView server started');
});



