const mongoose = require('mongoose');
const UserModel = require('./user.model');
const UserImageModel = require('./userImage.model');

const host = process.env.INC_DB_HOST;
const port = process.env.INC_DB_PORT;
const name = process.env.INC_DB_NAME;



mongoose.connect(`mongodb://${host}:${port}/${name}`).then(() =>{
    console.log("successfully connected to mongoDB.");
}).catch((err) => {
    console.log('error while connecting to mongoDB' , err);
})


const db = {};
db.User = UserModel;
db.UserImage = UserImageModel;

module.exports = db;
