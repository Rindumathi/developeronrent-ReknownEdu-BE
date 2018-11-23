var express = require('express');
var router = express.Router();
var questions = require('../models/questions');
var university = require('../models/university');

router.post('/questions', (req, res, next) => {

    let newquestions = questions({
        Scoreof10th: req.body.Scoreof10th,
        Scoreof12th: req.body.Scoreof12th,
        BachelorsScore: req.body.BachelorsScore,
        MastersScore: req.body.MastersScore,
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

        if (err) {
            console.log(err);
            res.json({ msg: 'Failure to add task' });
        }
        else {
            // res.json({msg:'add task'});
            // console.log(req.body.Scoreof12th)


            if (
                req.body.Recommedationlevels == "Exemplary" && req.body.Seminars >= 5 && req.body.Patents >= 5 && req.body.Paperpresentations >= 5 && req.body.Internationalconference >= 5 && req.body.Nationalconference >= 5 && req.body.Sports >= 5 && req.body.Extraskills >= 15 && (req.body.Workshops == 3 || req.body.Workshops == 4) && req.body.Projects == 6 && req.body.Internships == 5 && req.body.Workexperience == 6 &&
                (req.body.PTEScore >= 80 && req.body.PTEScore <= 90) && (req.body.IELTSScore >= 8.0 && req.body.IELTSScore <= 9.0) && (req.body.TOEFLScore >= 115 && req.body.TOEFLScore <= 120) && (req.body.SATScore >= 1500 && req.body.SATScore <= 1600) && (req.body.GMATScore >= 740 && req.body.GMATScore <= 800) && (req.body.GREScore >= 330 && req.body.GREScore <= 340) && req.body.Numberofbacklogs == 0) {

                if (req.body.Scoreof10th >= 95) {
                    if ((req.body.Scoreof10th >= 95 && req.body.Scoreof10th <= 100) && (req.body.Scoreof12th >= 95 && req.body.Scoreof12th <= 100) && (req.body.BachelorsScore >= 95 && req.body.BachelorsScore <= 100) && (req.body.MastersScore >= 95 && req.body.MastersScore <= 100)) {
                        university.find({ ug_10th: { $gt: 9 }, ug_12th: { $gt: 9 }, 'country': 'United States' }, (err, university) => {
                            if (err) {
                                res.json({ msg: 'Failure 1' })
                            }
                            else {
                                res.json(university);
                            }
                        })

                    }
                    else {
                        res.json({ msg: 'Failure 2' })
                    }
                }
                else {
                    res.json({ msg: 'Failure 3' })
                }
            }
            else {
                res.json({ error: err })
            }

        }
    })



})


//qus(working)
router.put('/finduni', (req, res, next) => {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("qa");
        if (!req.body.pg_10th || !req.body.pg_12th || !req.body.pg_gpa || !req.body.pg_Backlogs || !req.body.pg_gre || !req.body.pg_gmat || !req.body.pg_sat || !req.body.pg_toefl || !req.body.pg_ielts || !req.body.pg_pte || !req.body.pg_wrkexp || !req.body.pg_internship || !req.body.pg_projects || !req.body.pg_workshops || !req.body.pg_extraskills || !req.body.pg_sports || !req.body.pg_conference || !req.body.pg_paperpresentation || !req.body.pg_patents || !req.body.pg_seminars || !req.body.pg_recommendation || !req.body.pg_universityreputation) {
            res.json({ success: false, message: 'please fill all requirements' });
        } else {
            var query = new questions({
                masters: {
                    pg_10th: req.body.pg_10th,
                    pg_12th: req.body.pg_12th,
                    pg_gpa: req.body.pg_gpa,
                    pg_Backlogs: req.body.pg_Backlogs,
                    pg_gre: req.body.pg_gre,
                    pg_gmat: req.body.pg_gmat,
                    pg_sat: req.body.pg_sat,
                    pg_toefl: req.body.pg_toefl,
                    pg_ielts: req.body.pg_ielts,
                    pg_pte: req.body.pg_pte,
                    pg_wrkexp: req.body.pg_wrkexp,
                    pg_internship: req.body.pg_internship,
                    pg_projects: req.body.pg_projects,
                    pg_workshops: req.body.pg_workshops,
                    pg_extraskills: req.body.pg_extraskills,
                    pg_sports: req.body.pg_sports,
                    pg_conference: req.body.pg_conference,
                    pg_paperpresentation: req.body.pg_paperpresentation,
                    pg_patents: req.body.pg_patents,
                    pg_seminars: req.body.pg_seminars,
                    pg_recommendation: req.body.pg_recommendation,
                    pg_universityreputation: req.body.pg_universityreputation
                }
            });
            query.save((obj) => {
                if (req.body.pg_wrkexp == "6 years" && req.body.pg_internship == "5 certificates" && req.body.pg_projects == 6 && req.body.pg_recommendation == "Exemplary" && req.body.pg_universityreputation == "Exemplary" && (req.body.pg_workshops == 3 || req.body.pg_workshops == 4) && req.body.pg_extraskills >= 15 && req.body.pg_sports >= 5 && req.body.pg_conference >= 5 && req.body.pg_paperpresentation >= 5 && req.body.pg_patents >= 5 && req.body.pg_seminars >= 5 && (req.body.pg_gre >= 330 && req.body.pg_gre <= 340) && (req.body.pg_gmat >= 740 && req.body.pg_gmat <= 800) && (req.body.pg_sat >= 1500 && req.body.pg_sat <= 1600) && (req.body.pg_toefl >= 115 && req.body.pg_toefl <= 120) && (req.body.pg_ielts >= 8 && req.body.pg_ielts <= 9) && (req.body.pg_pte >= 80 && req.body.pg_pte <= 90) && ((req.body.pg_gpa >= 9.5 && req.body.pg_gpa <= 10) || (req.body.pg_gpa >= 95 && req.body.pg_gpa <= 100)) && ((req.body.pg_10th >= 9.5 && req.body.pg_10th <= 10) || (req.body.pg_10th >= 95 && req.body.pg_10th <= 100)) && ((req.body.pg_12th >= 9.5 && req.body.pg_12th <= 10) || (req.body.pg_12th >= 95 && req.body.pg_12th <= 100))) {
                    dbo.collection("universitydatas").find(obj).toArray(function (err, result) {
                        if (err) throw err;
                        //console.log(result);
                        res.json({ msg: "You are eligible to Titanium Universities", result });
                        // res.json(result);
                        // db.close();
                    });
                }
                else {
                    // res.json({ msg: "university not found" });
                    if (req.body.pg_wrkexp == "5 Years" && req.body.pg_internship == "4 Certificates" && req.body.pg_projects == 5 && req.body.pg_recommendation == "Amazing" && req.body.pg_universityreputation == "Amazing" && (req.body.pg_workshops == 3 || req.body.pg_workshops == 4) && (req.body.pg_extraskills >= 12 && req.body.pg_extraskills <= 14) && req.body.pg_sports >= 4 && req.body.pg_conference >= 4 && req.body.pg_paperpresentation >= 4 && req.body.pg_patents >= 4 && req.body.pg_seminars >= 4 && (req.body.pg_gre >= 325 && req.body.pg_gre <= 329) && (req.body.pg_gmat >= 680 && req.body.pg_gmat <= 739) && (req.body.pg_sat >= 1400 && req.body.pg_sat <= 1499) && (req.body.pg_toefl >= 110 && req.body.pg_toefl <= 114) && (req.body.pg_ielts >= 7.5 && req.body.pg_ielts <= 9) && (req.body.pg_pte >= 75 && req.body.pg_pte <= 79) && ((req.body.pg_gpa >= 8.5 && req.body.pg_gpa <= 9.4) || (req.body.pg_gpa >= 85 && req.body.pg_gpa <= 94)) && ((req.body.pg_10th >= 9 && req.body.pg_10th <= 9.4) || (req.body.pg_10th >= 90 && req.body.pg_10th <= 94)) && ((req.body.pg_12th >= 9 && req.body.pg_12th <= 9.4) || (req.body.pg_12th >= 90 && req.body.pg_12th <= 94)) && (req.body.pg_Backlogs >= 1 && req.body.pg_Backlogs <= 3)) {
                        dbo.collection("universitydatas").find(obj).toArray(function (err, result1) {
                            if (err) throw err;
                            //console.log(result);
                            res.json({ msg: "You are eligible to Platinum Universities", result1 });
                            // res.json(result);
                            // db.close();
                        });
                    }
                    else { res.json({ msg: 'university not found' }); }
                }

            });
        }
    });
});


//without save

//qus(working)
router.put('/probabilitytool', (req, res, next) => {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("qa");
        //if (!req.body.pg_10th || !req.body.pg_12th || !req.body.pg_gpa || !req.body.pg_Backlogs || !req.body.pg_gre || !req.body.pg_gmat || !req.body.pg_sat || !req.body.pg_toefl || !req.body.pg_ielts || !req.body.pg_pte || !req.body.pg_wrkexp || !req.body.pg_internship || !req.body.pg_projects || !req.body.pg_workshops || !req.body.pg_extraskills || !req.body.pg_sports || !req.body.pg_conference || !req.body.pg_paperpresentation || !req.body.pg_patents || !req.body.pg_seminars || !req.body.pg_recommendation || !req.body.pg_universityreputation) {
        //   res.json({ success: false, message: 'please fill all requirements' });
        //} else {
        var x = 10;
        var pg_10th_up =''+req.body.pg_10th*x+'';
        var pg_12th_up =''+req.body.pg_12th*x+'';
        var pg_gpa_up =''+req.body.pg_gpa*x+'';
        var query = {
            pg_10th: pg_10th_up,
            pg_12th: pg_12th_up,
            pg_gpa: pg_gpa_up,
            pg_Backlogs: req.body.pg_Backlogs,
            pg_gre: req.body.pg_gre,
            pg_gmat: req.body.pg_gmat,
            pg_sat: req.body.pg_sat,
            pg_toefl: req.body.pg_toefl,
            pg_ielts: req.body.pg_ielts,
            pg_pte: req.body.pg_pte,
            pg_wrkexp: req.body.pg_wrkexp,
            pg_internship: req.body.pg_internship,
            pg_projects: req.body.pg_projects,
            pg_workshops: req.body.pg_workshops,
            pg_extraskills: req.body.pg_extraskills,
            pg_sports: req.body.pg_sports,
            pg_conference: req.body.pg_conference,
            pg_paperpresentation: req.body.pg_paperpresentation,
            pg_patents: req.body.pg_patents,
            pg_seminars: req.body.pg_seminars,
            pg_recommendation: req.body.pg_recommendation,
            pg_universityreputation: req.body.pg_universityreputation
        };
        if ((req.body.pg_gre >= 330 && req.body.pg_gre <= 340) && (req.body.pg_gmat >= 740 && req.body.pg_gmat <= 800) && (req.body.pg_sat >= 1500 && req.body.pg_sat <= 1600) && (req.body.pg_toefl >= 115 && req.body.pg_toefl <= 120) && (req.body.pg_ielts >= 8.0 && req.body.pg_ielts <= 9.0) && (req.body.pg_pte >= 80 && req.body.pg_pte <= 90) && req.body.pg_wrkexp == "6 Years" && req.body.pg_internship == "5 Certificates" && req.body.pg_projects == 6 && (req.body.pg_workshops == 3 || req.body.pg_workshops == 4) && req.body.pg_extraskills >= 15 && req.body.pg_sports >= 5 && req.body.pg_conference >= 5 && req.body.pg_paperpresentation >= 5 && req.body.pg_recommendation == "Exemplary" && req.body.pg_universityreputation == "Exemplary" && req.body.pg_patents >= 5 && req.body.pg_seminars >= 5 && req.body.pg_Backlogs == 0 && (pg_12th_up >= 95 && pg_12th_up <= 100) && (pg_10th_up >= 95 && pg_10th_up <= 100) && (pg_gpa_up >= 95 && pg_gpa_up <= 100)) {
            console.log(query);
            dbo.collection("universitydatas").find(query).toArray(function (err, titanium) {
                if (err) throw err;
                //console.log(result);
                res.json({ msg: "You are eligible to Titanium Universities", titanium });
                // res.json(result);
                // db.close();
            });
        } else {
            if ((req.body.pg_gre >= 325 && req.body.pg_gre <= 329) && (req.body.pg_gmat >= 680 && req.body.pg_gmat <= 739) && (req.body.pg_sat >= 1400 && req.body.pg_sat <= 1499) && (req.body.pg_toefl >= 110 && req.body.pg_toefl <= 114) && (req.body.pg_ielts >= 7.5 && req.body.pg_ielts <= 9.0) && (req.body.pg_pte >= 75 && req.body.pg_pte <= 79) && req.body.pg_wrkexp == "5 Years" && req.body.pg_internship == "4 Certificates" && req.body.pg_projects == 5 && (req.body.pg_workshops == 3 || req.body.pg_workshops == 4) && req.body.pg_sports >= 4 && req.body.pg_conference >= 4 && req.body.pg_paperpresentation >= 4 && req.body.pg_recommendation == "Amazing" && req.body.pg_universityreputation == "Amazing" && req.body.pg_patents >= 4 && req.body.pg_seminars >= 4 && (pg_12th_up >= 90 && pg_12th_up <= 94) && (pg_10th_up >= 90 && pg_10th_up <= 94) && (pg_gpa_up >= 85 && pg_gpa_up <= 94) && (req.body.pg_extraskills >= 12 && req.body.pg_extraskills <= 14) && (req.body.pg_Backlogs >= 1 && req.body.pg_Backlogs <= 3)) {
                
                dbo.collection("universitydatas").find(query).toArray(function (err, platinum) {
                    if (err) throw err;
                    //console.log(result);
                    res.json({ msg: "You are eligible to Platinum Universities", platinum });
                    // res.json(result);
                    // db.close();
                });
            } else {
                //console.log(query);
                if (req.body.pg_seminars >= 3 && req.body.pg_recommendation == "Superb" && req.body.pg_universityreputation == "Superb" && req.body.pg_patents >= 3 && req.body.pg_paperpresentation >= 3 && req.body.pg_conference >= 3 && req.body.pg_sports >= 3 && (req.body.pg_extraskills >= 10 && req.body.pg_extraskills <= 11) && (req.body.pg_workshops == 3 || req.body.pg_workshops == 4) && req.body.pg_projects == 4 && req.body.pg_internship == "3 Certificates" && req.body.pg_wrkexp == "4 Years" && (req.body.pg_gre >= 315 && req.body.pg_gre <= 324) && (req.body.pg_gmat >= 650 && req.body.pg_gmat <= 679) && (req.body.pg_sat >= 1300 && req.body.pg_sat <= 1399) && (req.body.pg_toefl >= 100 && req.body.pg_toefl <= 109) && (req.body.pg_ielts >= 7.0 && req.body.pg_ielts <= 9.0) && (req.body.pg_pte >= 70 && req.body.pg_pte <= 74) && (req.body.pg_Backlogs >= 4 && req.body.pg_Backlogs <= 6) && (pg_gpa_up >= 80 && pg_gpa_up <= 84) && (pg_12th_up >= 85 && pg_12th_up <= 89) && (pg_10th_up >= 85 && pg_10th_up <= 89)) {
                    dbo.collection("universitydatas").find(query).toArray(function (err, diamond) {
                        if (err) throw err;
                        //console.log(result);
                        res.json({ msg: "You are eligible to Diamond Universities", diamond });
                        // res.json(result);
                        // db.close();
                    });
                } else {
                    if (req.body.pg_seminars >= 2 && req.body.pg_recommendation == "Good" && req.body.pg_universityreputation == "Good" && req.body.pg_patents >= 2 && req.body.pg_paperpresentation >= 2 && req.body.pg_conference >= 2 && req.body.pg_sports >= 2 && (req.body.pg_extraskills >= 7 && req.body.pg_extraskills <= 9) && req.body.pg_workshops == 2 && req.body.pg_projects == 3 && req.body.pg_internship == "2 Certificates" && req.body.pg_wrkexp == "3 Years" && (req.body.pg_gre >= 305 && req.body.pg_gre <= 314)&& (req.body.pg_gmat >= 600 && req.body.pg_gmat <= 649) && (req.body.pg_sat >= 1250 && req.body.pg_sat <= 1299) && (req.body.pg_toefl >= 95 && req.body.pg_toefl <= 99) && (req.body.pg_ielts >= 6.5 && req.body.pg_ielts <= 9.0)&& (req.body.pg_pte >= 65 && req.body.pg_pte <= 69) && (req.body.pg_Backlogs >= 7 && req.body.pg_Backlogs <= 9)&& (pg_gpa_up >= 75 && pg_gpa_up <= 79)&& (pg_12th_up >= 80 && pg_12th_up <= 84) && (pg_10th_up >= 80 && pg_10th_up <= 84)) {
                        dbo.collection("universitydatas").find(query).toArray(function (err, gold) {
                            if (err) throw err;
                            //console.log(result);
                            res.json({ msg: "You are eligible to Gold Universities", gold });
                            // res.json(result);
                            // db.close();
                        });
                    }else{
                        if (req.body.pg_seminars >= 1 && req.body.pg_recommendation == "Nice" && req.body.pg_universityreputation == "Nice" && req.body.pg_patents >= 1 && req.body.pg_paperpresentation >= 1 && req.body.pg_conference >= 1 && req.body.pg_sports >= 1 && (req.body.pg_extraskills >= 5 && req.body.pg_extraskills <= 6) && req.body.pg_workshops == 2 && req.body.pg_projects == 2 && req.body.pg_internship == "1 Certificate" && req.body.pg_wrkexp == "2 Years" && (req.body.pg_gre >= 295 && req.body.pg_gre <= 304)&& (req.body.pg_gmat >= 550 && req.body.pg_gmat <= 599) && (req.body.pg_sat >= 1200 && req.body.pg_sat <= 1249) && (req.body.pg_toefl >= 90 && req.body.pg_toefl <= 94) && (req.body.pg_ielts >= 6.0 && req.body.pg_ielts <= 9.0)&& (req.body.pg_pte >= 60 && req.body.pg_pte <= 64) && (req.body.pg_Backlogs >= 10 && req.body.pg_Backlogs <= 12)&& (pg_gpa_up >= 65 && pg_gpa_up <= 74)&& (pg_12th_up >= 70 && pg_12th_up <= 79) && (pg_10th_up >= 70 && pg_10th_up <= 79)) {
                            dbo.collection("universitydatas").find(query).toArray(function (err, silver) {
                                if (err) throw err;
                                //console.log(result);
                                res.json({ msg: "You are eligible to Silver Universities", silver });
                                // res.json(result);
                                // db.close();
                            });
                        }else{
                            if (req.body.pg_seminars >= 0 && req.body.pg_recommendation == "Mediocre" && req.body.pg_universityreputation == "Mediocre" && req.body.pg_patents >= 0 && req.body.pg_paperpresentation >= 0 && req.body.pg_conference >= 0 && req.body.pg_sports >= 0 && (req.body.pg_extraskills >= 2 && req.body.pg_extraskills <= 4) && req.body.pg_workshops == 1 && req.body.pg_projects == 1 && req.body.pg_internship == "No Certificates" && req.body.pg_wrkexp == "1 Year" && (req.body.pg_gre >= 285 && req.body.pg_gre <= 294)&& (req.body.pg_gmat >= 500 && req.body.pg_gmat <= 549) && (req.body.pg_sat >= 1150 && req.body.pg_sat <= 1399) && (req.body.pg_toefl >= 80 && req.body.pg_toefl <= 89) && (req.body.pg_ielts >= 5.5 && req.body.pg_ielts <= 9.0)&& (req.body.pg_pte >= 55 && req.body.pg_pte <= 59) && (req.body.pg_Backlogs >= 11 && req.body.pg_Backlogs <= 15)&& (pg_gpa_up >= 60 && pg_gpa_up <= 64)&& (pg_12th_up >= 60 && pg_12th_up <= 69) && (pg_10th_up >= 60 && pg_10th_up <= 69)) 
                            {
                                dbo.collection("universitydatas").find(query).toArray(function (err, copper) {
                                    if (err) throw err;
                                    //console.log(result);
                                    res.json({ msg: "You are eligible to Copper Universities", copper });
                                    // res.json(result);
                                    // db.close();
                                });

                            }else{
                                if (req.body.pg_seminars >= 0 && req.body.pg_recommendation == "Regular" && req.body.pg_universityreputation == "Regular" && req.body.pg_patents >= 0 && req.body.pg_paperpresentation >= 0 && req.body.pg_conference >= 0 && req.body.pg_sports >= 0 && (req.body.pg_extraskills >= 0 && req.body.pg_extraskills <= 1) && req.body.pg_workshops == 0 && req.body.pg_projects == 0 && req.body.pg_internship == "No Certificates" && req.body.pg_wrkexp == "0 Year" && (req.body.pg_gre >= 260 && req.body.pg_gre <= 284)&& (req.body.pg_gmat >= 400 && req.body.pg_gmat <= 500) && (req.body.pg_sat >= 900 && req.body.pg_sat <= 1150) && (req.body.pg_toefl >= 70 && req.body.pg_toefl <= 79) && (req.body.pg_ielts >= 5.0 && req.body.pg_ielts <= 9.0)&& (req.body.pg_pte >= 50 && req.body.pg_pte <= 54) && (req.body.pg_Backlogs >= 14 && req.body.pg_Backlogs <= 18)&& (pg_gpa_up >= 50 && pg_gpa_up <= 60)&& (pg_12th_up >= 40 && pg_12th_up <= 60) && (pg_10th_up >= 40 && pg_10th_up <= 60)) 
                                {
                                    dbo.collection("universitydatas").find(query).toArray(function (err, bronze) {
                                        if (err) throw err;
                                        //console.log(result);
                                        res.json({ msg: "You are eligible to Bronze Universities", bronze });
                                        // res.json(result);
                                        // db.close();
                                    });
                                }
                                else{
                                    res.json({ msg: "university not found" });
                                }
                            }
                        }
                    }
                }
            }
        }
        // }
    });
});


//checking
router.put('/probability', (req, res, next) => {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("qa");
        //if (!req.body.pg_10th || !req.body.pg_12th || !req.body.pg_gpa || !req.body.pg_Backlogs || !req.body.pg_gre || !req.body.pg_gmat || !req.body.pg_sat || !req.body.pg_toefl || !req.body.pg_ielts || !req.body.pg_pte || !req.body.pg_wrkexp || !req.body.pg_internship || !req.body.pg_projects || !req.body.pg_workshops || !req.body.pg_extraskills || !req.body.pg_sports || !req.body.pg_conference || !req.body.pg_paperpresentation || !req.body.pg_patents || !req.body.pg_seminars || !req.body.pg_recommendation || !req.body.pg_universityreputation) {
        //   res.json({ success: false, message: 'please fill all requirements' });
        //} else {
        //var pg_ielts_up = parseFloat(req.body.pg_ielts);

        var x = 10;
        var pg_10th_up =''+req.body.pg_10th*x+'';
        var query = {
            pg_10th:pg_10th_up,
            pg_ielts:pg_ielts_up
        };
        console.log(pg_10th_up);
        console.log(query);
        console.log(pg_ielts_up);
        if (pg_10th_up >= 85 && pg_ielts_up >= 7.5) {
            console.log(pg_10th_up);
            console.log(query);
            dbo.collection("universitydatas").find(query).toArray(function (err, diamond) {
                if (err) throw err;
                //console.log(result);
                res.json({ msg: "You are eligible to Diamond Universities", diamond });
                // res.json(result);
                // db.close();
            });
        } else {
            res.json({ msg: "university not found" });
        }
        // }

    });
});


router.get('/questions', (req, res, next) => {
    questions.find((err, questions) => {

        if (err) {
            res.json({ error: err })
        }
        else {
            res.json(questions);
        }
    })
})




router.post('/university', (req, res, next) => {

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
        bachelorprogram:

            req.body.bachelorprogram
        , bachelorprogram_link:

            req.body.bachelorprogram_link
        , bachelortutionfees_min:

            req.body.bachelortutionfees_min
        ,
        bachelortutionfees_max:

            req.body.bachelortutionfees_max
        ,
        masterprogram:

            req.body.masterprogram
        , masterprogram_link:

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
        , ug_howtoapply:

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

        if (err) {
            console.log(err);
            res.json({ msg: 'Failure to add task' });
        }
        else {
            res.json({ msg: 'task added successfully' });
        }
    })



})











router.get('/universitydata', (req, res, next) => {
    university.find((err, university) => {

        if (err) {
            res.json({ error: err })
        }
        else {
            res.json(university);
        }
    })
})


router.get('/eligible', (req, res, next) => {

    // titanium master's degree
    questions.find((err, questions) => {

        if (err) {
            res.json({ error: err })
        }
        else {
            res.json(questions);
        }
    })
    if (req.body.Scoreof12th >= 9.5 && req.body.Scoreof12th <= 10) {
        university.find({ ug_12th: { $gte: 9.5 } }, (err, university) => {

            if (err) {
                res.json({ error: err })
            }
            else {
                res.json(university.ug_12th);
            }
        })

    }
    else {
        res.json({ error: err })
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
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
