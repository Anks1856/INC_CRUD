const mongoose = require('mongoose');

const userImageSchema = mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    image : {
        type : String
    }
})

const UserImage = mongoose.model('UserImage' , userImageSchema);

module.exports = UserImage;