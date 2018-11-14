const express = require('express');//value of variable not gone change
const router = express.Router();
const Country = require('../models/countryMaster');



//visainfo,averagesalary,scholarship countryinfo
router.get('/countryinfo/:id', function (req, res) {
    Country.find({ id: req.params.id }, function (err, countries) {
       if(countries)
       {
         if(countries < 69)
         {
            res.json({ success: false, message: 'country not found' });
        }
         else{
            res.json(countries);
         }
       }else{
        res.json(err);
       }
   });
});
//router.get('/scholarship/:id', function (req, res) {
 //   Country.find({ id: req.params.id }, function (err, scholarshipcountries) {
   //     if (err) res.json(err);
   //     else res.json(scholarshipcountries);
   // });
//});

module.exports = router;
