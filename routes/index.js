var express	= require('express'),
	router	= express.Router();

var Blog = require('../models/Blog');


router.get('/', function(req, res){
	Blog.find({}).sort('-date').exec(function(err, allBlogs){
		if(err){
			console.log(err);
		}else{
			res.render('home', {blogs: allBlogs});
		}
	})
});

router.get('/blogs/:id', function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err){
			console.log(err);
		}else{
			res.render('showBlog', {blog: foundBlog});
		}
	})
})


module.exports = router; 