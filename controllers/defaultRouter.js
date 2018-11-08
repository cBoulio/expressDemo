var express = require('express');
var router = express.Router();

router.get(['/','/home','/index'],function(req, res){
	res.render('index',{title: 'Express Router With Node.js'});
});

router.get('/whatsJadeDemo', function(req, res){
	res.render('whatsJade');
});
router.get('/whatsNodeDemo',function(req,res){
	res.render('whatsNode');
});

router.get('/whatsMailerDemo', function(req, res){
	res.render('nodeMailer');
});

router.post('/whatsMailerDemo/send', function(req, res){
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'your@email.com',
			pass: 'password'
		}
	});

	var mailOptions = {
		from: 'Caleb Boulio <Mr.calebboulio@gmail.com>',
		to: 'test@test.com',
		subject: 'Website Submission',
		text: 'You have a submission with the following details... Name: '+req.body.name+'Email: '+req.body.email+ 'Message: '+req.body.message,
		html: '<p>You have a submission with the following details...</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
	};

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
			res.redirect('/');
		} else {
			console.log('Message Sent: '+info.response);
			res.redirect('/');
		}
	});
});


module.exports = router;