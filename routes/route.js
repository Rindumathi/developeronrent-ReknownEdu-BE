var express = require('express');
var router = express.Router();

/* Get*/
router.get('/',function(req,res,next){
    res.send('Express API');
});

module.exports = router;
