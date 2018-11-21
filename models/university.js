const mongoose = require('mongoose');

const UniversitySchema = mongoose.Schema ({

    country:{
        type: String,
        required: false
    },
    university:{
        type: String,
        required: false
    },
    location:{
        type: String,
        required: false
    },
    bachelorprogram :{
        type: String,
        required: false
    },bachelorprogram_link:{
        type: String,
        required: false
    },bachelortutionfees_min:{
        type: String,
        required: false
    },
    bachelortutionfees_max:{
        type: String,
        required: false
    },
    masterprogram:{
        type: String,
        required: false
    },masterprogram_link:{
        type: String,
        required: false
    },
    mastertutionfees_min:{
        type: String,
        required: false
    },
    mastertutionfees_max:{
        type: String,
        required: false
    },
    phdprogram:{
        type: String,
        required: false
    },
    phdprogram_link:{
        type: String,
        required: false
    },
    phdtutionfees_min:{
        type: String,
        required: false
    },
    phdtutionfees_max:{
        type: String,
        required: false
    },
    tutionfees_link:{
        type: String,
        required: false
    },ug_howtoapply:{
        type: String,
        required: false
    },
    pg_howtoapply:{
        type: String,
        required: false
    },
    ug_toefl:{
        type: String,
        required: false
    },
    ug_toefl_max:{
        type: String,
        required: false
    },
    ug_ielts:{
        type: String,
        required: false
    },
    ug_ielts_max:{
        type: String,
        required: false
    },
    ug_pte:{
        type: String,
        required: false
    },
    ug_pte_max:{
        type: String,
        required: false
    },
    ug_cae:{
        type: String,
        required: false
    },
    ug_cae_max:{
        type: String,
        required: false
    },
    ug_cael:{
        type: String,
        required: false
    },
    ug_cael_max:{
        type: String,
        required: false
    },
    ug_sat:{
        type: String,
        required: false
    },
    ug_sat_max:{
        type: String,
        required: false
    },
    ug_gre:{
        type: String,
        required: false
    },
    ug_gre_max:{
        type: String,
        required: false
    },
    ug_gmat:{
        type: String,
        required: false
    },
    ug_gmat_max:{
        type: String,
        required: false
    },
    ug_melab:{
        type: String,
        required: false
    },
    ug_melab_max:{
        type: String,
        required: false
    },
    ug_gpa:{
        type: String,
        required: false
    },
    ug_gpa_max:{
        type: String,
        required: false
    },
    pg_toefl:{
        type: String,
        required: false
    },
    pg_toefl_max:{
        type: String,
        required: false
    },
    pg_ielts:{
        type: String,
        required: false
    },
    pg_ielts_max:{
        type: String,
        required: false
    },
    pg_pte:{
        type: String,
        required: false
    },
    pg_pte_max:{
        type: String,
        required: false
    },
    pg_cae:{
        type: String,
        required: false
    },
    pg_cae_max:{
        type: String,
        required: false
    },
    pg_cael:{
        type: String,
        required: false
    },
    pg_cael_max:{
        type: String,
        required: false
    },
    pg_sat:{
        type: String,
        required: false
    },
    pg_sat_max:{
        type: String,
        required: false
    },
    pg_gre:{
        type: String,
        required: false
    },
    pg_gre_max:{
        type: String,
        required: false
    },
    pg_gmat:{
        type: String,
        required: false
    },
    pg_gmat_max:{
        type: String,
        required: false
    },
    pg_melab:{
        type: String,
        required: false
    },
    pg_melab_max:{
        type: String,
        required: false
    },
    pg_gpa:{
        type: String,
        required: false
    },
    pg_gpa_max:{
        type: String,
        required: false
    },
    ug_10th:{
        type: String,
        required: false
    },
    ug_10thmax:{
        type: String,
        required: false
    },
    ug_12th:{
        type: String,
        required: false
    },
    ug_12thmax:{
        type: String,
        required: false
    },
    pg_10th:{
        type: String,
        required: false
    },
    pg_10thmax:{
        type: String,
        required: false
    },
    pg_12th:{
        type: String,
        required: false
    },
    pg_12thmax:{
        type: String,
        required: false
    },
    pg_Backlogs:{
        type: String,
        required: false
    },
    ug_wrkexp:{
        type: String,
        required: false
    },
    pg_wrkexp:{
        type: String,
        required: false
    },
    ug_internship:{
        type: String,
        required: false
    },
    pg_internship:{
        type: String,
        required: false
    },
    ug_projects:{
        type: String,
        required: false
    },
    pg_projects:{
        type: String,
        required: false
    },
    ug_workshops:{
        type: String,
        required: false
    },
    pg_workshops:{
        type: String,
        required: false
    },
    ug_extraskills:{
        type: String,
        required: false
    },
    pg_extraskills:{
        type: String,
        required: false
    },
    ug_sports:{
        type: String,
        required: false
    },
    pg_sports:{
        type: String,
        required: false
    },
    ug_conference:{
        type: String,
        required: false
    },
    pg_conference:{
        type: String,
        required: false
    },
    ug_paperpresentation:{
        type: String,
        required: false
    },
    pg_paperpresentation:{
        type: String,
        required: false
    },
    ug_patents:{
        type: String,
        required: false
    },
    pg_patents:{
        type: String,
        required: false
    },
    ug_seminars:{
        type: String,
        required: false
    },
    pg_seminars:{
        type: String,
        required: false
    },
    ug_recommendation:{
        type: String,
        required: false
    },
    pg_recommendation:{
        type: String,
        required: false
    },
    ug_universityreputation:{
        type: String,
        required: false
    },
    pg_universityreputation:{
        type: String,
        required: false
    },
    ug_socialservice:{
        type: String,
        required: false
    }




});

const university = module.exports = mongoose.model('universitydata',UniversitySchema)