const db = require('../models/index');
const bcrypt = require('bcrypt');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

const upload = multer({storage :storage}).array("user_imgs" , 4);

const getAllUsers = async (req, res) => {
    try {
         const users = await db.User.find({ deleted_at : { $exists: false }});// whare delete not
         res.status(200).send(users);
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            message : 'Enternal server error',
            error : err
        })
    }
}

const uploadImage = async (req, res) => {
    try{
        upload(req, res , (err) => {
            if(err){
                res.status(400).send('somting went wrong!');
            }
            // new db.UserImage({})
        })
        res.status(200).send('image uploaded successfully');
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            message : 'Enternal server error',
            error : err
        })
    }
} 

const addUser = async (req, res) => {
    try {
        var { password ,  ...newUser} = req.body;
        password = bcrypt.hashSync(password , 8);
        newUser.password = password; 
        const user = new db.User(newUser);
        await user.save();
        res.status(200).send('user added successfully.');
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            message : 'Enternal server error',
            error : err
        })
    }        
}

const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await db.User.findByIdAndUpdate({_id : id} , req.body , {new : true})
        res.status(200).send({
            message: 'user updated successfully.' , 
            data : user 
        });

    }
    catch(err){
        console.log(err);
        res.status(500).send({
            message : 'Enternal server error',
            error : err
        })
    }
}

const deleteuser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await db.User.findByIdAndUpdate({_id : id} , {deleted_at : Date.now()} , {new : true});
        res.status(200).send({
            message : 'user deleted successfully.',
            data: user
        });
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            message : 'Enternal server error',
            error : err
        })
    }
}

module.exports = {getAllUsers, addUser, updateUser, deleteuser, uploadImage}