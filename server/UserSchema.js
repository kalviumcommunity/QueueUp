const mongoose = require("mongoose");

const UserSchema= mongoose.Schema({
    Docimg:{
        type:String,
        // required:true
    },
    DoctorName:{
        type: String,
        // required:true
    },
    HospitalName:{
        type:String,
        // required:true
    },
    HospitalsImg:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        // required:true
        // index: true
    },
    password:{
        type:String,
        // required:true
        index: true
    },
    Specialty:{
        type:String,
        // required:true
    },
    QRimg:{
        type:String,
        // required:true
    },
    City:{
        type:String,
        // required:true
    },
    Count:{
        type:Number, 
        // required:true
    },
    Gender:{
        type:String,
    },
    Awards:{
        type:String,
    }
});

const User=mongoose.model("User",UserSchema);
 
module.exports=User;