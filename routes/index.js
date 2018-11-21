var express = require('express');
var router = express.Router();
var questions = require('../models/questions');
var university = require('../models/university');

router.post('/questions',(req,res,next)=>{

  let newquestions = questions({
    Scoreof10th: req.body.Scoreof10th,
    Scoreof12th: req.body.Scoreof12th,
    BachelorsScore: req.body.BachelorsScore,
    MastersScore:req.body.MastersScore,
    Numberofbacklogs: req.body.Numberofbacklogs,
    GREScore: req.body.GREScore,
    GMATScore: req.body.GMATScore,
    SATScore: req.body.SATScore,
    TOEFLScore: req.body.TOEFLScore,
    IELTSScore: req.body.IELTSScore,
    PTEScore: req.body.PTEScore,
    Workexperience: req.body.Workexperience,
    Internships: req.body.Internships,
    Projects: req.body.Projects,
    Workshops: req.body.Workshops,
    Extraskills: req.body.Extraskills,
    Sports: req.body.Sports,
    Nationalconference: req.body.Nationalconference,
    Internationalconference: req.body.Internationalconference,
    Paperpresentations: req.body.Paperpresentations,
    Patents: req.body.Patents,
    Seminars: req.body.Seminars,
    Recommedationlevels: req.body.Recommedationlevels

  });
  newquestions.save((err, questions) => {

    if(err)
    {
      console.log(err);
      res.json({msg:'Failure to add task'});
    }
    else{
      // res.json({msg:'add task'});
      // console.log(req.body.Scoreof12th)
     

      if(   
        req.body.Recommedationlevels == "Exemplary" && req.body.Seminars >= 5 && req.body.Patents >= 5 && req.body.Paperpresentations >= 5 && req.body.Internationalconference >= 5 && req.body.Nationalconference >= 5 && req.body.Sports >= 5 && req.body.Extraskills >=15 &&  (req.body.Workshops == 3 || req.body.Workshops == 4) && req.body.Projects == 6 && req.body.Internships == 5 && req.body.Workexperience == 6 && 
         (req.body.PTEScore >=80 && req.body.PTEScore <=90) && (req.body.IELTSScore >=8.0 && req.body.IELTSScore <=9.0) && (req.body.TOEFLScore >=115 && req.body.TOEFLScore <=120) && (req.body.SATScore >=1500 && req.body.SATScore <=1600) && (req.body.GMATScore >=740 && req.body.GMATScore <=800) && (req.body.GREScore >=330 && req.body.GREScore <=340) && req.body.Numberofbacklogs == 0 )
      {

        if(req.body.Scoreof10th >= 95)
        {
            if((req.body.Scoreof10th >= 95 && req.body.Scoreof10th <= 100) && (req.body.Scoreof12th >= 95 && req.body.Scoreof12th <= 100) && (req.body.BachelorsScore >= 95 && req.body.BachelorsScore <= 100) && (req.body.MastersScore >= 95 && req.body.MastersScore <= 100))
            {
                university.find({ ug_10th: {$gt : 9},ug_12th: {$gt : 9},'country':'United States'  },(err,university)=>{
                      if(err){
                        res.json({msg:'Failure 1'})
                      }
                      else
                      {
                        res.json(university);
                      }
                   })

            }
            else
            {
              res.json ({msg:'Failure 2'})
            }
        }
        else
        {
          res.json ({msg:'Failure 3'})
        }
      
     

           

       
        
      }
      else
      {
        res.json ({error : err})
      }
   
    }
  })



})


//qus
router.post('/finduni', (req, res, next) => {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("qa");
        if (!req.body.pg_wrkexp) {
            res.json({ success: false, message: 'Workexperience is missing' });
        } else {
            if (!req.body.pg_internship) {
                res.json({ success: false, message: 'Internships is missing' });
            } else {
                var query = new questions({
                    pg_wrkexp: req.body.pg_wrkexp,
                    pg_internship: req.body.pg_internship
                });
                query.save((obj) => {
                    if (req.body.pg_wrkexp == "6 years" && req.body.pg_internship == "5 certificates") {
                        //var query = { pg_wrkexp: req.body.pg_wrkexp, pg_internship: req.body.pg_internship };
                        dbo.collection("universitydatas").find(obj).toArray(function (err, result) {
                            if (err) throw err;
                            console.log(result);
                            res.json(result);
                            db.close();
                        });
                    } else {
                      res.json({msg:"university not found"});
                    }
                });
            }

        }
    });
});




router.get('/questions',(req,res,next)=>{
  questions.find((err,questions)=>{

    if(err){
      res.json({error : err })
    }
    else
    {
      res.json(questions);
    }
  })
})




router.post('/university',(req,res,next)=>{

  let newuniversity = university({
    country:
        
    req.body.country
,
university:
    
    req.body.university
,
location:
    
    req.body.location
,
bachelorprogram :
    
    req.body.bachelorprogram
,bachelorprogram_link:
    
    req.body.bachelorprogram_link
,bachelortutionfees_min:
    
    req.body.bachelortutionfees_min
,
bachelortutionfees_max:
    
    req.body.bachelortutionfees_max
,
masterprogram:
    
    req.body.masterprogram
,masterprogram_link:
    
    req.body.masterprogram_link
,
mastertutionfees_min:
    
    req.body.mastertutionfees_min
,
mastertutionfees_max:
    
    req.body.mastertutionfees_max
,
phdprogram:
    
    req.body.phdprogram
,
phdprogram_link:
    
    req.body.phdprogram_link
,
phdtutionfees_min:
    
    req.body.phdtutionfees_min
,
phdtutionfees_max:
    
    req.body.phdtutionfees_max
,
tutionfees_link:
    
    req.body.tutionfees_link
,ug_howtoapply:
    
    req.body.ug_howtoapply
,
pg_howtoapply:
    
    req.body.pg_howtoapply
,
ug_toefl:
    
    req.body.ug_toefl
,
ug_toefl_max:
    
    req.body.ug_toefl_max
,
ug_ielts:
    
    req.body.ug_ielts
,
ug_ielts_max:
    
    req.body.ug_ielts_max
,
ug_pte:
    
    req.body.ug_pte
,
ug_pte_max:
    
    req.body.ug_pte_max
,
ug_cae:
    
    req.body.ug_cae
,
ug_cae_max:
    
    req.body.ug_cae_max
,
ug_cael:
    
    req.body.ug_cael
,
ug_cael_max:
    
    req.body.ug_cael_max
,
ug_sat:
    
    req.body.ug_sat
,
ug_sat_max:
    
    req.body.ug_sat_max
,
ug_gre:
    
    req.body.ug_gre
,
ug_gre_max:
    
    req.body.ug_gre_max
,
ug_gmat:
    
    req.body.ug_gmat
,
ug_gmat_max:
    
    req.body.ug_gmat_max
,
ug_melab:
    
    req.body.ug_melab
,
ug_melab_max:
    
    req.body.ug_melab_max
,
ug_gpa:
    
    req.body.ug_gpa
,
ug_gpa_max:
    
    req.body.ug_gpa_max
,
pg_toefl:
    
    req.body.pg_toefl
,
pg_toefl_max:
    
    req.body.pg_toefl_max
,
pg_ielts:
    
    req.body.pg_ielts
,
pg_ielts_max:
    
    req.body.pg_ielts_max
,
pg_pte:
    
    req.body.pg_pte
,
pg_pte_max:
    
    req.body.pg_pte_max
,
pg_cae:
    
    req.body.pg_cae
,
pg_cae_max:
    
    req.body.pg_cae_max
,
pg_cael:
    
    req.body.pg_cael
,
pg_cael_max:
    
    req.body.pg_cael_max
,
pg_sat:
    
    req.body.pg_sat
,
pg_sat_max:
    
    req.body.pg_sat_max
,
pg_gre:
    
    req.body.pg_gre
,
pg_gre_max:
    
    req.body.pg_gre_max
,
pg_gmat:
    
    req.body.pg_gmat
,
pg_gmat_max:
    
    req.body.pg_gmat_max
,
pg_melab:
    
    req.body.pg_melab
,
pg_melab_max:
    
    req.body.pg_melab_max
,
pg_gpa:
    
    req.body.pg_gpa
,
pg_gpa_max:
    
    req.body.pg_gpa_max
,
ug_10th:
    
    req.body.ug_10th
,
ug_10thmax:
    
    req.body.ug_10thmax
,
ug_12th:
    
    req.body.ug_12th
,
ug_12thmax:
    
    req.body.ug_12thmax
,
pg_10th:
    
    req.body.pg_10th
,
pg_10thmax:
    
    req.body.pg_10thmax
,
pg_12th:
    
    req.body.pg_12th
,
pg_12thmax:
    
    req.body.pg_12thmax
,
pg_Backlogs:
    
    req.body.pg_Backlogs
,
ug_wrkexp:
    
    req.body.ug_wrkexp
,
pg_wrkexp:
    
    req.body.pg_wrkexp
,
ug_internship:
    
    req.body.ug_internship
,
pg_internship:
    
    req.body.pg_internship
,
ug_projects:
    
    req.body.ug_projects
,
pg_projects:
    
    req.body.pg_projects
,
ug_workshops:
    
    req.body.ug_workshops
,
pg_workshops:
    
    req.body.pg_workshops
,
ug_extraskills:
    
    req.body.ug_extraskills
,
pg_extraskills:
    
    req.body.pg_extraskills
,
ug_sports:
    
    req.body.ug_sports
,
pg_sports:
    
    req.body.pg_sports
,
ug_conference:
    
    req.body.ug_conference
,
pg_conference:
    
    req.body.pg_conference
,
ug_paperpresentation:
    
    req.body.ug_paperpresentation
,
pg_paperpresentation:
    
    req.body.pg_paperpresentation
,
ug_patents:
    
    req.body.ug_patents
,
pg_patents:
    
    req.body.pg_patents
,
ug_seminars:
    
    req.body.ug_seminars
,
pg_seminars:
    
    req.body.pg_seminars
,
ug_recommendation:
    
    req.body.ug_recommendation
,
pg_recommendation:
    
    req.body.pg_recommendation
,
ug_universityreputation:
    
    req.body.ug_universityreputation
,
pg_universityreputation:
    
    req.body.pg_universityreputation
,
ug_socialservice:
    
    req.body.ug_socialservice





  });
  newuniversity.save((err, university) => {

    if(err)
    {
      console.log(err);
      res.json({msg:'Failure to add task'});
    }
    else{
      res.json({msg:'task added successfully'});
    }
  })



})











router.get('/universitydata',(req,res,next)=>{
  university.find((err,university)=>{

    if(err){
      res.json({error : err })
    }
    else
    {
      res.json(university);
    }
  })
})


router.get('/eligible',(req,res,next)=>{

  // titanium master's degree
  questions.find((err,questions)=>{

    if(err){
      res.json({error : err })
    }
    else
    {
      res.json(questions);
    }
  })
  if(req.body.Scoreof12th >= 9.5 && req.body.Scoreof12th <=10)
  {
    university.find({ug_12th : { $gte: 9.5 }}, (err,university)=>{

      if(err){
        res.json({error : err })
      }
      else
      {
        res.json(university.ug_12th);
      }
    })

  }
  else{
    res.json({error : err })
  }


// questions.find({Scoreof12th : { $gt: 30 }}, (err,questions)=>{

//   if(err){
//     res.json({error : err })
//   }
//   else
//   {
//     res.json(questions);
//   }
// })
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
