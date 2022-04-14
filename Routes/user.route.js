const express = require('express');
const router = express.Router();
const userHandler = require('../Handlers/user.handler'); 

router.get('/getAll' , userHandler.getAllUsers);

router.post('/add' , userHandler.addUser);
router.put('/:id/update' , userHandler.updateUser);
router.patch('/:id/delete' , userHandler.deleteuser);
router.post('/uploadImage' , userHandler.uploadImage);

module.exports = router;