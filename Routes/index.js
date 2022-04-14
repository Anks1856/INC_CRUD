const express = require('express');
const router = express.Router();

const userRouter = require('./user.route');

router.get('/' , (req, res) => {
    res.status(200).send('Api router')
})
router.use('/users' , userRouter);

module.exports = router;