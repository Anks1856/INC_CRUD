const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    first_name : {
        type : String
    },
    last_name : {
        type : String
    },
    email : {
        type : String , unique : true
    },
    password : {
        type : String , minLength : 4
    },
    phone : {
        type : String , unique : true 
    },
    code : {
        type : String , unique : true
    },
    deleted_at : {
        type : Date , 
    }
},
{
    timestamps: true
})

const User = mongoose.model('User' , userSchema);

module.exports = User;