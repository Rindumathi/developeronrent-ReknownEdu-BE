var express = require('express');
var router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const config = require('../config/database');

/* Get*/
router.get('/', function(req, res, next) {
    res.send('Express API');
});


// Register
router.post('/register', (req, res, next) => {
    if (!req.body.email) {
        res.json({ success: false, message: 'You must provide an e-mail' });
    } else {
        if (!req.body.firstname) {
            res.json({ success: false, message: 'You must provide a firstname' });
        }
        else {
            if (!req.body.lastname) {
                res.json({ success: false, message: 'You must provide a lastname' });
            } else {
                if (!req.body.password) {
                    res.json({ success: false, message: 'You must provide a password' });
                } else {
                    let user = new User({
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        email: req.body.email.toLowerCase(),
                        password: req.body.password,
                        temporarytoken: jwt.sign({ email: 'user.email' }, config.secret, { expiresIn: '24h' }),
                        creation_dt: Date.now()
                    });
                    user.save((err) => {
                        if (err) {
                            if (err.code == 11000) {
                                res.json({ success: false, message: 'email already exists' });
                            } else {
                                if (err.errors) {
                                    if (err.errors.email) {
                                        res.json({ success: false, message: err.errors.email.message });
                                    } else {
                                        // Check if validation error is in the password field
                                        if (err.errors.password) {
                                            res.json({ success: false, message: err.errors.password.message }); // Return error
                                        } else {
                                            res.json({ success: false, message: err }); // Return any other error not already covered
                                        }
                                    }
                                } else {
                                    res.json({ success: false, message: 'Could not save user.Error:', err });
                                }
                            }
                        } else {
                            // Create e-mail object to send to user            
                            nodemailer.createTestAccount((err, account) => {
                                // create reusable transporter object using the default SMTP transport
                                let transporter = nodemailer.createTransport({
                                    host: 'smtp.gmail.com',
                                    port: 587, //587
                                    secure: false, // true for 465, false for other ports
                                    auth: {
                                        user: "schoolingcouncil2018@gmail.com", // your own gmail eg abc@gmail.com
                                        pass: "Schoolingcouncil@2018"  // Enter secret gmail password not gmail login password
                                    }
                                });
                                const email = {
                                    from: 'Localhost Staff, staff@localhost.com',
                                    to: user.email,
                                    subject: 'Localhost Activation Link',
                                    text: 'Hello ' + user.email + ', thank you for registering at localhost.com. Please click on the following link to complete your activation: http://localhost:4200/activate/' + user.temporarytoken,
                                    html: 'Hello<strong> ' + user.email + '</strong>,<br><br>Thank you for registering at localhost.com. Please click on the link below to complete your activation:<br><br><a href="http://localhost:4200/activate/' + user.temporarytoken + '">http://localhost:4200/activate/</a>'
                                };
                                transporter.sendMail(email, (error, info) => {
                                    if (error) {
                                        return console.log(error);
                                    }
                                    console.log('Message sent: %s', info.messageId);
                                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                                });
                            });
                            res.json({ success: true, message: 'Acount registered! Please check your e-mail for activation link.' }); // Return success
                        }
                    });
                }
            }
        }
    }

});

// Route to activate the user's account	
router.put('/activate/:token', function(req, res) {
    User.findOne({ temporarytoken: req.params.token }, function(err, user) {
        if (err) throw err; // Throw error if cannot login
        var token = req.params.token; // Save the token from URL for verification 

        // Function to verify the user's token
        //jwt.verify(token, config.secret, function(err, decoded) {
        if (err) {
            res.json({ success: false, message: 'Activation link has expired.' }); // Token is expired
        } else if (!user) {
            res.json({ success: false, message: 'Activation link has expired.' }); // Token may be valid but does not match any user in the database
        } else {
            user.temporarytoken = false; // Remove temporary token
            user.active = true; // Change account status to Activated
            // Mongoose Method to save user into the database
            user.save(function(err) {
                if (err) {
                    console.log(err); // If unable to save user, log error info to console/terminal
                } else {
                    // If save succeeds, create e-mail object // Create e-mail object to send to user            
                    nodemailer.createTestAccount((err, account) => {
                        // create reusable transporter object using the default SMTP transport
                        let transporter = nodemailer.createTransport({
                            host: 'smtp.gmail.com',
                            port: 587, //587
                            secure: false, // true for 465, false for other ports
                            auth: {
                                user: "schoolingcouncil2018@gmail.com", // eg john@gmail.com
                                pass: "Schoolingcouncil@2018"  // hjdkalsfajs
                            }
                        });
                        const email = {
                            from: 'Localhost Staff, staff@localhost.com',
                            to: user.email,
                            subject: 'Account Activated',
                            text: 'Hello ' + user.email + ', Your account has been successfully activated!',
                            html: 'Hello<strong> ' + user.email + '</strong>,<br><br>Your account has been successfully activated!'
                        };
                        transporter.sendMail(email, (error, info) => {
                            if (error) {
                                return console.log(error);
                            }
                        });
                    });
                    res.json({ success: true, message: 'Account activated!' }); // Return success message to controller
                }
            });
        }
    });
    // });
});

// Route for user logins
router.post('/authenticate', function(req, res) {
    User.findOne({ email: req.body.email }).select('email password active').exec(function(err, user) {
        if (err) throw err; // Throw err if cannot connect

        // Check if user is found in the database (based on username)			
        if (!user) {
            res.json({ success: false, message: 'email not found' }); // Username not found in database
        } else if (user) {
            // Check if user does exist, then compare password provided by user
            if (!req.body.password) {
                res.json({ success: false, message: 'No password provided' }); // Password was not provided
            } else {
                var validPassword = user.comparePassword(req.body.password); // Check if password matches password provided by user 
                if (!validPassword) {
                    res.json({ success: false, message: 'Could not authenticate password' }); // Password does not match password in database
                } else if (!user.active) {
                    res.json({ success: false, message: 'Account is not yet activated. Please check your e-mail for activation link.', expired: true }); // Account is not activated 
                } else {
                    //var token = jwt.sign({ email: user.email}, config.secret, { expiresIn: '24h' }); // Logged in: Give user token
                    const token = jwt.sign({ userId: user._id }, config.secret, {
                        expiresIn: 604800 // 1 week
                    });
                    res.json({
                        success: true, message: 'User authenticated!', token: token, user: { email: user.email }
                    }); // Return token in JSON object to controller
                }
            }
        }
    });
});

router.use((req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    res.json({ success: false, message: 'No token provided' });
  } else {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        res.json({ success: false, message: 'Token invalid' + err });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
});

//Profile
router.get('/profile', (req, res) => {
  User.findOne({ _id: req.decoded.userId }).select('firstname lastname email').exec((err, user) => {
    if (err) {
      res.json({ success: false, message: err });
    } else {
      if (!user) {
        res.json({ success: false, message: 'User not found' });
      } else {
        res.json({ success: true, user: user });
      }
    }
  });
});

module.exports = router;
