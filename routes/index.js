var express	= require('express'),
	router	= express.Router();

var Blog = require('../models/Blog');
var Comment = require('../models/Comment');


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
	Blog.findById(req.params.id).populate('comments').exec(function(err, foundBlog){
		if(err){
			console.log(err);
		}else{
			res.render('showBlog', {blog: foundBlog});
		}
	})
});

router.post('/blogs/:id/newComment', function(req, res){
	var comment = {
		email: req.body.email,
		name: req.body.name,
		comment: req.body.comment
	}

	Comment.create(comment, function(err, newComment){
		if(err){
			console.log(err);
			res.redirect('/');
		}else{
			Blog.findById(req.params.id, function(err, foundBlog){
				if(err){
					console.log(err);
					res.redirect('/');
				}else{

					foundBlog.comments.push(newComment);
					newComment.save();
					foundBlog.save();
					res.redirect('/blogs/' + foundBlog._id);
				}
	});
		}
	});
});


module.exports = router; 