const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    masters: {
        pg_10th: {
            type: String,
        },
        pg_12th: {
            type: String,
        },
        pg_gpa: {
            type: String,
        },
        pg_Backlogs: {
            type: String,
        },
        pg_gre: {
            type: String,
        },
        pg_gmat: {
            type: String,
        },
        pg_sat: {
            type: String,
        },
        pg_toefl: {
            type: String,
        },
        pg_ielts: {
            type: String,
        },
        pg_pte: {
            type: String,
        },
        pg_wrkexp: {
            type: String,
        },
        pg_internship: {
            type: String,
        },
        pg_projects: {
            type: String,
        },
        pg_workshops: {
            type: String,
        },
        pg_extraskills: {
            type: String,
        },
        pg_sports: {
            type: String,
        },
        pg_conference: {
            type: String,
        },
        pg_paperpresentation: {
            type: String,
        },
        pg_patents: {
            type: String,
        },
        pg_seminars: {
            type: String,
        },
        pg_recommendation: {
            type: String,
        },
        pg_universityreputation: {
            type: String,
        }
    }
});

const questions = module.exports = mongoose.model('questions', Schema);