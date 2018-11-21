const mongoose = require("mongoose") ;

const Schema = mongoose.Schema({
    pg_wrkexp:{
        type: String,
        

    },
    pg_internship:{
        type: String,
       

    }
    
});

const questions = module.exports = mongoose.model('questions',Schema);